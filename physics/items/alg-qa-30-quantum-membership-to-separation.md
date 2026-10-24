---
id: alg-qa-30-quantum-membership-to-separation
kind: algorithm
title: "Quantum membership-to-separation procedure"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 15
deps:
  - def-qa-30-quantum-membership-separation-model
  - def-qc-controlled-unitary-access
  - def-qc-inverse-unitary-access
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "https://arxiv.org/pdf/1809.00643v4"
      url: "https://arxiv.org/pdf/1809.00643"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
---

## Definition

This finite algorithm takes a convex body, a rational query point and radii, a precision/failure budget, and supplied coherent deterministic weak-membership access with inverse. It returns IN when the membership interface certifies that branch; otherwise it returns a finite-precision weak separating normal and halfspace or an explicitly distinguished INVALID, RANDOM_FAIL, or FAILURE branch. The algorithm charges the membership oracle and inverse, all controlled queries, point rotations, numerical arithmetic, random sampling, phase estimation, QFTs, output bits, and every gate.

## OP0 — Numerical arithmetic, roots, coefficient generation and finite amplification

**Certified elementary evaluation.** For rational x and error 2^-b, evaluate exp, sin and cos by their rational Taylor sums until the absolute remainder bound `3^ceil(|x|+1)|x|^(N+1)/(N+1)!` is below the error budget; sine/cosine may first reduce the argument by a certified interval for π. Compute π by the arctangent identity `π=16 arctan(1/5)−4 arctan(1/239)` with alternating-series bounds. For x≥0 compute square roots by rational bisection between 0 and `max(1,x)`; x=0 returns0 and x<0 returns INVALID in the real routine. For x>0 compute log x with `2Σ_(j=0)^(N−1)y^(2j+1)/(2j+1)`, y=(x−1)/(x+1), and tail `2|y|^(2N+1)/((2N+1)(1−y²))`. Each loop increases N or b until its explicit rational remainder test passes. Store the interval, not an uncertified floating result. Complex exponentials use the resulting sine/cosine intervals. For atan2(y,x), the zero vector returns INVALID; otherwise select its quadrant by certified signs (exact zero coordinates use their explicit axis angles), and bisect an angle interval in that quadrant using monotonic sine/cosine comparisons with the normalized vector until its width meets the requested error. If an interval straddles an equality, retain the adjoining angle intervals rather than request a real zero test. Return the midpoint plus its error interval. Whenever a numerical logarithm/angle appears in a ceiling or resource cutoff, compute an upper rational enclosure of width≤1/4 and take its ceiling; this defines a terminating conservative integer rule even at exact integer boundaries. Norms are square roots of explicit sums of squared coordinates; a zero norm takes the separately stated zero-output/INVALID branch before division. Bounds on the number/size of these operations are separate classical bit-cost obligations.

## OP7 — Quantum membership-to-separation with an explicit finite grid

Binds `alg-qa-30-quantum-membership-to-separation` and its radius/precision/query result.

**Inputs.** Rationally encoded query point x∈R^n, radii 0<r≤R, η∈(0,R],ρ∈(0,1/3], and coherent MEM_(ε,0) plus inverse, with the exact weak-boundary promise in QA30. Require `ε≤ε_adm=η(58n)^(-9/2)(r/R)^3(η/R)^2ρ`. Use the positive allowance `ε_work=max(ε,ε_adm/2)`; an oracle with a smaller boundary width also satisfies this larger-width promise, including an exact ε=0 oracle. In the remaining numerical instructions ε denotes ε_work; rounding the encoded point and emitted hyperplane consumes an explicit share of η, so use exact-algebraic arithmetic or a requested membership precision sufficient for that share. The zero failure parameter refers to oracle correctness outside its ε boundary band, not to a unique answer inside that band. All queried addresses have fixed-point encodings and the same declared deterministic oracle completion.

1. Query MEM at x. An inside answer returns the allowed `IN` label. If x=0 return IN under the interior-ball promise. For n=1, return the outward signed normal sign(x) after OUT; the interval/inner-ball promise and ε<r place x within ε of or beyond that same signed endpoint. No zero-dimensional gradient circuit is invoked. For n≥2 use a finite list of coordinate-plane rotations to send x to `−||x||e_n`, zeroing coordinates one at a time. Store both the rotation and inverse; charge their arithmetic.
2. In rotated coordinates let `h(y)=inf{z:(y,z)∈K}`, y∈R^(n−1). Set ρ₀=99ρ/100, `r₁=rη/(12sqrt(n)R)`, `δ=ηρ₀ n^(-9/2)(rη/R²)^2/(96·23^4)`, L=2R/r and `r₂=sqrt(δr₁ρ₀/(nL))`. The source input bound implies ε≤rδ/(3R); check this interval inequality with certified arithmetic. If an input encoding cannot certify its promised bounds, return INVALID rather than silently tighten the promise.
3. **h-value oracle.** On each y∈B(0,r/2), initialize low=−R,high=−r/2. For `q=ceil(log₂(3R/δ))+2` iterations compute mid=(low+high)/2, query MEM at (y,mid), and set high=mid on an inside answer, low=mid otherwise. Return high. In the coherent version retain branch bits, copy the fixed-point high value, then reverse the whole computation and oracle calls to erase workspace. The final bracket has width≤δ/3. The weak-boundary inequalities, rather than exact membership, justify its δ value error. h is evaluated only on the declared transverse ball.
4. **Finite random shift.** Set σ_grid=ρ/1000. Choose b by increasing integers so that the mesh h₀=2r₁/2^b satisfies `h₀≤σ_grid r₂²/(8n²r₁)`, by repeated halving. Draw b independent uniform bits per transverse coordinate to select its cell center; retain the resulting finite algebraic description of z. There are exactly 2^b cells in each coordinate, so this step has no rejection tail. All subsequent oracle addresses are rounded coherently to the fixed-point query encoding with the deterministic accuracy budget below. Continuous uniform sampling is not an instruction to a discrete computer. The discrete Laplacian changes by at most `4n²L h₀/r₂²` within a mesh cell, which is the local proof route controlling this replacement.
5. Set a=2r₂/n, B=La and m=max(5,ceil(log₂(B/(28πδ)))). Let M=2^m and **B*=28πδM**; this ≥B normalization handles non-dyadic source M without invalidating the phase tolerance. On each of `ceil(18 ln(1000n/ρ))+3` independent gradient runs, prepare a uniform m-bit register for each transverse coordinate. Decode each address as `u_i=(j_i+1/2)/M−1/2`, compute the h approximation at z+a u, apply phase `exp(2πi M h_tilde(z+a u)/(3B*))`, and uncompute h. Apply the negative-sign QFT separately to every coordinate and measure. Decode each y_i to signed y_i/M∈[-1/2,1/2), and output `g_i=3B* y_i/(aM)` when y_i denotes the signed integer. Equivalently multiply the signed fraction by 3B*/a. Take each coordinate's median across the runs. Phase/value/gate implementation error is separately summed into the gradient tolerance. No eigenstate resampling issue occurs: these are repeated estimates of a fixed gradient at the same z.
6. Form s′=(−g,1), normalize s=s′/||s′|| and apply the stored inverse rotation. Internally s satisfies the inward inequality `⟨s,z_K⟩≥⟨s,x⟩−η`. Emit its NEGATIVE as the outward normal G, so the library contract is `⟨G,z_K⟩≤⟨G,x⟩+η`. Represent G by a nonzero rational direction v and the normalization G=v/||v||; refine the output rounding until its angular error on B(0,R) and x uses at most η/100. Record a rational N with ||v||≤N≤2||v|| for classical rational halfspace arithmetic. Encoded output errors consume the reserved slack; they are not ignored.

**Deterministic precision budget.** Refine rotated point/address coordinates until their total Euclidean error per membership query is at most min(ε/1000,δ/(1000L)); refine coherent phase synthesis until the accumulated per-run operator error is at most1/1000. The strict slack in the displayed ε bound makes the effective weak-membership tolerance, including address error, less than0.98·rδ/(3R). In the height search, the resulting boundary error plus the final bracket and value rounding is therefore belowδ. Rotations and emitted direction rounding use the remaining η/100 output budget. Every refinement is a finite rational interval calculation on the named input quantities; its bit cost is additional.

This is a finite procedure. The local proof combines h's convexity/Lipschitz and weak-boundary search, the finite mesh error, Jordan's phase-grid law, coordinate medians, and the normalized separator. B*=28πδM ensures the phase approximation condition at a power-of-two M; replacing the source non-dyadic M by a larger M with unchanged B would not. The chosen ρ₀ leaves slack for mesh and random-sampler failure; the exact constants and finite-bit budgets are proved in the local suppliers and query theorem, not accepted from a source citation. Source: van Apeldoorn et al. Lemmas14–15,18–21 and Theorem23, PDF pp.10–18. Rotation, coherent h-evaluation, logarithmic arithmetic, data/query bits and the emitted n-dimensional normal all contribute costs.



## Remarks

The query and correctness claims are proved separately in [[thm-qa-30-quantum-membership-separation-cost]]. The proof suppliers are the local height-geometry, finite-grid subgradient, and centroid weak-optimization items; a citation to the source is not substituted for those arguments.
