---
id: cex-sr-simultaneity-is-observer-dependent
kind: counterexample
domain: mathematics
title: "Counterexample: simultaneity is relative to the observer vector"
status: draft
origin: pipeline
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [def-sr-simultaneity-slice-and-rest-distance, thm-sr-proper-time-and-observer-decomposition, def-lorentz-boost, def-inertial-frame-and-inertial-chart, def-causal-classification-of-lorentz-vectors, def-sr-affine-minkowski-model, lem-lorentz-map-preserves-metric-and-causal-structure, lem-boost-is-proper-orthochronous-with-inverse, def-lorentz-map-and-lorentz-group, lem-timelike-cone-has-two-convex-components]
dependency_roles:
  def-sr-simultaneity-slice-and-rest-distance: mathematical-premise
  thm-sr-proper-time-and-observer-decomposition: mathematical-premise
  def-lorentz-boost: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-sr-affine-minkowski-model: mathematical-premise
  lem-lorentz-map-preserves-metric-and-causal-structure: mathematical-premise
  lem-boost-is-proper-orthochronous-with-inverse: mathematical-premise
  def-lorentz-map-and-lorentz-group: mathematical-premise
  lem-timelike-cone-has-two-convex-components: mathematical-premise
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
sources:
  references:
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook, 246 PDF pages): Sections 1.1-1.3 pp. 12-28 (vector representation of observer motion, operational radar calibration, time dilation, length-contraction road-trip example), Sections 3.5 and 3.7 pp. 60-68 (four-velocity, acceleration, projection operator), Section 3.9.3 pp. 73-74 (local failure of accelerated simultaneity), Sections 7.1-7.3 pp. 147-151 (Rindler coordinates and nonuniform proper acceleration), Section 8.1 pp. 165-169 (rotating synchronization), Section 9.5 pp. 205-211 (congruences, expansion, Born rigidity); signature (+---) converted to (-+++) and c = 1 formulas converted to x^0 = c t"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997): Chapter 1 pp. 8-16 (inertial frames built from rigid rods and synchronized clocks, simultaneity, time dilation, length contraction) and pp. 26-27 (worldline, proper time (1.97)-(1.99), four-velocity); Chapter 3 pp. 68-71 (proper-time functional)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
---

## Statement refuted

**False claim:** the simultaneity relation $\eta(n,q-p)=0$ between events of the affine model is independent of the future unit timelike vector $n$ ([[def-sr-simultaneity-slice-and-rest-distance]]).

**Counterexample.** In an inertial chart let $p:=x^{-1}(0,0,0,0)$ and $q:=x^{-1}(0,1,0,0)$, so that $d:=q-p$ is spacelike with $\eta(d,d)=1$, and let $n:=e_0=(1,0,0,0)$ and $n':=\gamma\bigl(e_0+\tfrac35e_1\bigr)=\tfrac54(1,\tfrac35,0,0)$, a boost of speed $3c/5$ along the first axis. Then $\eta(n',n')=\tfrac{25}{16}\bigl(-1+\tfrac{9}{25}\bigr)=-1$, so $n'$ is also a future unit timelike vector; $\eta(n,d)=0$, so $p$ and $q$ are simultaneous relative to $n$ and lie in the slice $H(p,n)$; and $\eta(n',d)=\tfrac54\cdot\tfrac35=\tfrac34\ne0$, so $p$ and $q$ are not simultaneous relative to $n'$ and lie in different slices for $n'$. The two slices $H(p,n)$ and $H(p,n')$ are distinct three-dimensional affine hyperplanes through $p$. Hence simultaneity in the sense of [[def-sr-simultaneity-slice-and-rest-distance]] depends on the observer vector and is not an observer-independent relation.

## Facts & Assumptions

**Given:** The affine Minkowski model with an inertial frame $(o;e_0,e_1,e_2,e_3)$ and its chart $x$ ([[def-inertial-frame-and-inertial-chart]], [[def-causal-classification-of-lorentz-vectors]]), the events $p=x^{-1}(0,0,0,0)=o$ and $q=x^{-1}(0,1,0,0)=o+e_1$, the displacement $d=q-p=e_1$, the future unit vectors $n=e_0$ and $n'=\gamma(e_0+\tfrac35e_1)$ with $\gamma=(1-\tfrac{9}{25})^{-1/2}=\tfrac54$, and the slices $H(p,n)=p+n^\perp$, $H(p,n')=p+n'^\perp$ ([[def-sr-simultaneity-slice-and-rest-distance]]).

[L1] $\eta(e_a,e_b)=\operatorname{diag}(-1,1,1,1)_{ab}$ for the inertial frame's basis, so $\eta$ is evaluated on coordinate vectors by $\eta(u,v)=-u^0v^0+u^1v^1+u^2v^2+u^3v^3$ ([[def-inertial-frame-and-inertial-chart]], [[def-sr-affine-minkowski-model]]).

[L2] The future unit timelike vectors are the vectors $n$ with $\eta(n,n)=-1$ and $n\in C^+$; the first basis vector $e_0$ of an inertial frame is future unit, and proper orthochronous Lorentz maps preserve the causal classification and the time orientation ([[def-causal-classification-of-lorentz-vectors]], [[lem-lorentz-map-preserves-metric-and-causal-structure]], [[def-lorentz-map-and-lorentz-group]]).

[L3] The passive boost with parameter $\beta$, $|\beta|<1$, is a proper orthochronous Lorentz map with inverse the boost with parameter $-\beta$, and its matrix in the inertial basis has entries $B^0{}_0=B^1{}_1=\gamma$ and $B^0{}_1=B^1{}_0=-\gamma\beta$ on the first two coordinate directions, so $B(-\beta)e_0=\gamma(e_0+\beta e_1)$ for the first basis vector, with $\gamma=(1-\beta^2)^{-1/2}$ ([[def-lorentz-boost]], [[lem-boost-is-proper-orthochronous-with-inverse]]).

[L4] For a future unit $n$, $n^\perp=\{v:\eta(n,v)=0\}$ and $H(p,n)=p+n^\perp=\{z:\eta(n,z-p)=0\}$; the slice contains $p$ and is a three-dimensional affine hyperplane ([[def-sr-simultaneity-slice-and-rest-distance]], [[thm-sr-proper-time-and-observer-decomposition]] clause (c), [[lem-timelike-cone-has-two-convex-components]]).

## Counterexample

**Proof technique:** direct.

1.1 The displacement is $d=q-p=e_1$ by [L1], and $\eta(d,d)=\eta(e_1,e_1)=1$, so $d$ is spacelike; the vector $n=e_0$ is future unit by [L2]; the vector $n'=\tfrac54(e_0+\tfrac35e_1)$ is the image $B(-3/5)e_0$ of $e_0$ under the boost with parameter $\beta=3/5$ by [L3], hence $n'$ is future timelike by [L2], and its norm is $\eta(n',n')=\tfrac{25}{16}\bigl(\eta(e_0,e_0)+\tfrac65\eta(e_0,e_1)+\tfrac{9}{25}\eta(e_1,e_1)\bigr)=\tfrac{25}{16}(-1+\tfrac{9}{25})=-1$ by [L1], so $n'$ is future unit; in components $n'=\tfrac54 e_0+\tfrac34 e_1$. [L1, L2, L3]

2.1 Simultaneity relative to $n$: $\eta(n,d)=\eta(e_0,e_1)=0$ by [L1], so $q-p\in n^\perp$ and $q\in H(p,n)$ by [L4]; the events $p,q$ are simultaneous relative to $n$. [L1, L4, step 1.1]

2.2 Non-simultaneity relative to $n'$: $\eta(n',d)=\tfrac54\eta(e_0,e_1)+\tfrac34\eta(e_1,e_1)=0+\tfrac34=\tfrac34\ne0$ by [L1] and step 1.1, so $q-p\notin n'^\perp$ and $q\notin H(p,n')$ by [L4]; the events $p,q$ are not simultaneous relative to $n'$. [L1, L4, step 1.1]

2.3 The two slices are distinct: the vector $e_1$ satisfies $\eta(n,e_1)=0$, so $e_1\in n^\perp$, while $\eta(n',e_1)=\tfrac34\ne0$, so $e_1\notin n'^\perp$; hence $n^\perp\ne n'^\perp$ as subspaces of $V$. Both $H(p,n)=p+n^\perp$ and $H(p,n')=p+n'^\perp$ are three-dimensional affine hyperplanes through $p$ by [L4], and since their direction subspaces differ they are distinct sets. [L1, L4, step 1.1]

3.1 Conclusion: the single pair of events $p=x^{-1}(0,0,0,0)$, $q=x^{-1}(0,1,0,0)$ is simultaneous relative to the future unit vector $n=e_0$ by step 2.1 and not simultaneous relative to the future unit vector $n'=\tfrac54(e_0+\tfrac35e_1)$ by step 2.2, and the corresponding slices through $p$ are distinct by step 2.3. Therefore the simultaneity relation defined by $\eta(n,q-p)=0$ is not independent of the observer vector $n$, and the claim of the Statement refuted section is false. [step 2.1, step 2.2, step 2.3] ∎

## Remarks

- **Exact rational data.** The boost speed $3c/5$ was chosen so that $\gamma=5/4$ and the two pairings $\eta(n,d)=0$, $\eta(n',d)=3/4$ are exact rational numbers; no numerical approximation is involved.

- **The witness for distinctness of the direction subspaces is $e_1$.** The vector $e_1$ lies in $n^\perp$ and not in $n'^\perp$; the two rest spaces of distinct future unit vectors are in fact always distinct, indeed, if $n^\perp=n'^\perp$, then $h_n(n')\in n^\perp$ is orthogonal to every vector of $n^\perp$ (because both $n$ and $n'$ are); positive definiteness forces $h_n(n')=0$. The decomposition theorem then makes $n'$ a multiple of $n$, and future unit normalization forces that multiple to be $1$.
