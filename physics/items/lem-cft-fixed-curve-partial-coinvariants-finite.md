---
id: lem-cft-fixed-curve-partial-coinvariants-finite
kind: lemma
title: Finite partial coinvariants on a fixed pointed compact curve
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: mathematics
proof_strategy: direct
deps:
- lem-cft-c2-cofinite-modules-finitely-generated
- lem-cft-cyclic-weak-module-difference-one-spanning
- lem-cft-aut-o-action-and-coordinate-covariance
- lem-cft-state-field-and-residue-coordinate-covariance
- thm-serre-duality-compact-riemann-surfaces
- thm-long-exact-sequence-sheaf-cohomology
- thm-riemann-roch-compact-riemann-surfaces
dependency_roles:
  lem-cft-c2-cofinite-modules-finitely-generated: mathematical-premise
  lem-cft-cyclic-weak-module-difference-one-spanning: mathematical-premise
  lem-cft-aut-o-action-and-coordinate-covariance: mathematical-premise
  lem-cft-state-field-and-residue-coordinate-covariance: mathematical-premise
  thm-serre-duality-compact-riemann-surfaces: mathematical-premise
  thm-long-exact-sequence-sheaf-cohomology: mathematical-premise
  thm-riemann-roch-compact-riemann-surfaces: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
  - title: Gui and Zhang, Analytic Conformal Blocks I
    url: https://arxiv.org/pdf/2305.10180v4
    locator: Lemma3.24 and Theorem3.25, PDFpp64–66; the pole-lifting proof is reconstructed
      using the actual local spanning and line-duality suppliers.
dependency_level: 3
---


## Statement

Assume full AC as in compact-curve cohomology. Let C be a finite disjoint union of compact Riemann surfaces with distinct incoming marks $x_1,...,x_N$ and outgoing marks $y_1,...,y_M$. Every component contains an incoming mark. Fix local coordinates at every mark and a tuple $a=(a_1,...,a_M)$ of nonnegative integers. Let V be C2-cofinite and of CFT type, and W an admitted grading-restricted generalized joint module at the incoming marks, with no tensor-factorization assumption.

Write $V_C$ for the state bundle and $D=\sum x_i$. Define its outgoing lattice $V_{(C,a)}$ by retaining $V_C$ away from the outgoing marks and taking the O-submodule spanned by $\theta_j^{(a_j+r)}v$ for homogeneous v in $V_r$ at $y_j$. This is a filtered union of finite-rank bundles. Let $J_a$ be the span of the incoming residue actions on W of global sections of $V_{(C,a)} \otimes K_C$ with finite poles only at D. Then $W/J_a$ is finite dimensional. In particular ordinary coinvariants, obtained with no outgoing marks, are finite dimensional. This is a fixed-curve assertion; no relative coherence, analytic sewing or representability is inferred.

## Facts & Assumptions

**Given:** Exactly the curve, marks, coordinates, module and pole lattices in the Statement.

[F1] [[lem-cft-c2-cofinite-modules-finitely-generated]] gives finite generation and a compatible nonnegative multigrading with finite pieces on W. Modes of a weight-r state have component degree r-n-1.

[F2] [[lem-cft-cyclic-weak-module-difference-one-spanning]] gives strict-index spanning with a finite positive-weight representative set A of V/C2(V), and a generator cutoff. Component actions commute.

[F3] [[lem-cft-aut-o-action-and-coordinate-covariance]] gives the finite state bundles, with positive Virasoro modes lowering state weight and diagonal scaling by the rth power in state weight r. [[lem-cft-state-field-and-residue-coordinate-covariance]] makes the residue action coordinate covariant.

[F4] [[thm-riemann-roch-compact-riemann-surfaces]] supplies a canonical divisor representing $K_C$. [[thm-serre-duality-compact-riemann-surfaces]] says H1(O(B)) is dual to H0(K(-B)) on each compact component, and these spaces are finite dimensional. A negative-degree line bundle has no nonzero holomorphic section. [[thm-long-exact-sequence-sheaf-cohomology]] supplies the exact lifting sequence. The same theorem applies to finite extensions by filtering into line-bundle quotients.

## Proof

1.1 Choose finitely many incoming generators homogeneous for F1's auxiliary multigrading. For each component action and generator choose the truncation cutoff on the finite set A. Commute distinct component blocks and apply F2 successively to them. This spans W by products of strict-index A-words in the separate components on those generators, with a uniform upper index cutoff in each component. This reduction is valid even when W does not split: commute all other blocks past the block being reduced, apply F2 to that component's cyclic submodule of the generator, and commute back. If A is empty, only the empty words remain, so the finite incoming generator set spans W; hence W and its quotient $W/J_a$ are finite dimensional directly. [F1, F2, algebra]

1.2 Let E be the maximum of $\{0\}\cup\{\mathrm{wt}(a):a∈A\}$, so $E=0$ if A is empty and the bundle and vanishing calculations below remain defined. Set $F_E=V_{(C,a)},\le E \otimes K_C$. This is a finite-rank holomorphic bundle. To see its filtration explicitly, the state-weight filtration of F3 has graded weight-r quotient $V_r \otimes K_C^{(-r)}$. At the outgoing points the lattice definition twists this quotient by $O(-\sum_j(a_j+r)y_j)$. Thus $F_E$ has successive quotients finite direct sums of $$K_C^{1-r}\bigl(-\sum_j(a_j+r)y_j\bigr),\qquad 0\le r\le E.$$ The outgoing elementary modifications are locally free because their displayed lattice frames are powers of a local parameter times a vector-space basis; the filtration quotients have the stated frames. [F3, given, construct]

2.1 Fix K. The spanning strings all of whose mode indices are at least -K form a finite set: their indices lie in the finite interval from -K to the generator cutoff, are strict within each component, and their states lie in A. Thus their total auxiliary degrees have a maximum nu(K), enlarged to include all generator degrees and zero. A vector homogeneous of degree $n>\nu(K)$ is therefore a sum of homogeneous terms $a_{(-l)}^{(i)}w°$ with a in A and $l>K$. Indeed in some component the first, smallest strict index is less than -K; move its mode past the other components to the far left. Its remaining tail has degree n-wt(a)-l+1. [F1, F2, step 1.1, algebra]

2.2 On each component deg $D>0$. After tensoring every quotient in step 1.2 with O(kD), its degree tends to positive infinity as k tends to infinity. Choose k0 so that all these finitely many line quotients have degree greater than the degree of $K_C$ for every $k\ge k0$, on every component. F4 then gives zero H1 for every quotient, hence $H1(C,F_E(kD))=0$ for $k\ge k0$ by induction through the finite filtration. This establishes the exact vanishing needed below from line duality; no unnamed vector-bundle vanishing theorem is invoked. [F4, step 1.2, algebra]

3.1 Choose $K\ge E+k0$ and $n>\nu(K)$. It suffices by step 2.1 to reduce a term $w=a_{(-l)}^{(i)}w°$, with $l>K$ and $r=\operatorname{wt}(a)\ge 1$. The finite quotient sheaf $F_E(lD)/F_E(k0D)$ is supported on the incoming marks. In it prescribe the principal part $a t_i^{(-l)}dt_i$ at $x_i$ and zero at the other marks, setting all intermediate coefficients below order -k0 to zero. The long exact sequence and $H1(C,F_E(k0D))=0$ lift this prescription to a global sigma in $H0(C,F_E(lD))$. Consequently its expansion at $x_i$ is $a t_i^{(-l)}dt_i$ plus a state-valued one-form of pole order at most k0, while at every other incoming point it has pole order at most k0. All its state coefficients have weight at most E. [F3, F4, step 2.2, construct]

4.1 By definition sigma acting on w° belongs to $J_a$. Its incoming residue action equals w plus a remainder $w_{\delta}$. Each remainder term increases total auxiliary degree by at most E+k0-1: a coefficient $v t^pdt$ with $p\ge -k0$ gives mode $v_{(p)}$, of degree wt(v)-p-1. Although a regular Taylor tail is infinite, only finitely many of its terms act on the fixed w°, by truncation on the finite state basis of $V_{\le E}$. Since w° has degree n-r-l+1, the remainder has degree at most $n+E+k0-r-l<n$. Hence w is congruent to a sum of strictly smaller-degree vectors modulo $J_a$. [F1, F3, step 3.1, algebra]

5.1 The auxiliary grading is nonnegative. Induction on n now reduces every vector to $W_{\le\nu(K)}$ modulo $J_a$. This is a finite sum of finite-dimensional grading pieces by F1, so it is finite dimensional. Its image surjects onto $W/J_a$, proving the Statement. The argument did not require $J_a$ to be graded: every reduction used an explicit finite remainder of smaller input degree. Taking $M=0$ gives the ordinary fixed-surface case. [F1, step 4.1, algebra] ∎
