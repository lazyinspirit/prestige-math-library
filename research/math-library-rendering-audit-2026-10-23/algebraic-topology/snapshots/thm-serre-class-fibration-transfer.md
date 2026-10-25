---
id: thm-serre-class-fibration-transfer
kind: theorem
title: Serre-class transfer through a simply connected fibration
status: published
origin: pipeline
pipeline_run: phase-2-next-18
deps: [thm-homological-serre-spectral-sequence, thm-first-quadrant-spectral-sequence-transfer-modulo-a-serre-class, thm-universal-coefficient-theorem-for-homology-over-a-pid, lem-boundaries-and-cycles-in-a-free-complex-over-a-pid-are-free, def-serre-class-ring-ideal-and-mod-c-morphism, prop-serre-edge-maps-are-induced-by-projection-and-fiber-inclusion, def-serre-filtration-of-the-total-space-over-base-skeleta, lem-relative-homology-over-one-base-cell-is-the-shifted-fiber-homology, lem-the-first-serre-differential-is-the-cellular-boundary-with-local-coefficients, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  references:
    - title: "Miller, MIT 18.906 notes, Serre classes in the Serre spectral sequence"
      url: "https://ocw.mit.edu/courses/18-906-algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf"
      locator: "Lecture 30, Proposition 30.7 and Proposition 30.8 with proofs, printed pp. 107–108"
---

## Statement

Assume the Axiom of Choice. Let $p:E\to B$ be a Serre fibration over a
path-connected CW complex, with path-connected fiber $F$.

1. Let $\mathcal C$ be a Serre ideal and suppose the action of $\pi_1(B)$ on
   $H_*(F;\mathbb Z)$ is trivial. If $N\geq0$ and
   $H_t(F;\mathbb Z)\in\mathcal C$ for $0<t\leq N$, then
   $$p_*:H_i(E;\mathbb Z)\longrightarrow H_i(B;\mathbb Z)$$
   is a $\mathcal C$-isomorphism for $0\leq i\leq N$. Consequently, if the
   hypothesis holds for every $t>0$, this is true in every degree.

2. Let $\mathcal C$ be a Serre ring, suppose $B$ is simply connected, and fix
   $n\geq2$. If
   $$H_s(B;\mathbb Z)\in\mathcal C\quad(0<s<n),\qquad H_t(F;\mathbb Z)\in\mathcal C\quad(0<t<n-1),$$
   then the map of pairs $(E,F)\to(B,*)$ induces a
   $\mathcal C$-isomorphism
   $$p_*:H_i(E,F;\mathbb Z)\longrightarrow H_i(B,*;\mathbb Z)$$
   for every $i\leq n$.

If $B$ and $F$ are simply connected, the action and connectivity conditions
appearing above hold, but the displayed $\mathcal C$-membership hypotheses
remain necessary. No claim is made outside the displayed ranges.

## Facts & Assumptions

**Given:** AC, the fibration and base/fiber hypotheses, the indicated Serre ideal or ring, and the displayed finite range.

[A1] [[def-axiom-of-choice]] discharges the explicit AC hypotheses in [F4] and its freeness supplier.

[F1] [[thm-homological-serre-spectral-sequence]] gives the natural choice-free sequence $E^2_{s,t}=H_s(B;\mathcal H_t)$, its finite strong convergence, and constant coefficients when the transport action is trivial.

[F2] [[def-serre-class-ring-ideal-and-mod-c-morphism]] gives the tensor-and-Tor closure distinction and the meaning of a $\mathcal C$-isomorphism.

[F3] [[thm-first-quadrant-spectral-sequence-transfer-modulo-a-serre-class]] transfers $\mathcal C$-membership from a bounded $E_2$ region to a finite filtered abutment.

[F4] Under AC, [[thm-universal-coefficient-theorem-for-homology-over-a-pid]] gives the natural exact sequence $$0\to H_s(B;\mathbb Z)\otimes M\to H_s(B;M)\to\operatorname{Tor}^{\mathbb Z}_1(H_{s-1}(B;\mathbb Z),M)\to0.$$ Its proof uses the AC-qualified freeness of cycles and boundaries in [[lem-boundaries-and-cycles-in-a-free-complex-over-a-pid-are-free]].

[F5] [[prop-serre-edge-maps-are-induced-by-projection-and-fiber-inclusion]] identifies the base edge with $p_*$ and the fiber edge with inclusion of $F$.

[F6] [[def-serre-filtration-of-the-total-space-over-base-skeleta]], [[lem-relative-homology-over-one-base-cell-is-the-shifted-fiber-homology]], and [[lem-the-first-serre-differential-is-the-cellular-boundary-with-local-coefficients]] supply the skeletal relative-cell calculation and cellular differential used in the local relative construction below.

## Proof

**Proof technique:** coefficient control on the absolute base edge, then the corresponding quotient filtration for the relative clause.

1.1 Under the trivial-action hypothesis, [F1] gives $E^2_{s,t}=H_s(B;H_t(F))$. If $0<t\leq N$, the coefficient group $M=H_t(F)$ lies in the ideal $\mathcal C$. Both the tensor and Tor terms in [F4] then lie in $\mathcal C$ even though the base homology groups need not. Extension closure gives $E^2_{s,t}\in\mathcal C$ for every $s$ and every such $t$. [A1, F1, F2, F4]

1.2 For clause 2, take the basepoint as a zero-cell and filter the relative chain complex $C_*(E,F)$ by the images of $C_*(E_s,F)$, using the skeletal spaces in [F6]. The exact-couple construction applies to this quotient filtration. The cell calculation of [F6] is unchanged on every open cell not belonging to the distinguished subcomplex $*$, while the basepoint cell and its fiber are quotiented out. Its first page is therefore the relative cellular complex $C_s^{\mathrm{cell}}(B,*;H_t(F))$, and the first differential is its local-coefficient boundary. Since $B$ is simply connected, the system is constant, so $$E^2_{s,t}=H_s(B,*;H_t(F))\Longrightarrow H_{s+t}(E,F). \qquad\text{(1)}$$ The convergence proof is the relative version of the finite-support argument: each relative cycle and each chosen boundary primitive is a finite singular chain, its projection meets a finite base subcomplex, and the first-quadrant differential bounds stabilize its class. Thus the induced filtration on each $H_i(E,F)$ is finite, exhaustive, and has the stable terms of (1) as its quotients. No absolute-to-relative comparison is being assumed. [F1, F6]

2.1 Fix $i\leq N$. Every stable filtration quotient of $H_i(E)$ except the bottom-row quotient has $t>0$ and hence lies in $\mathcal C$ by step 1.1 and [F3]. Their finite extension, the kernel of the base edge, lies in $\mathcal C$. The stable subgroup $E^\infty_{i,0}\subseteq E^2_{i,0}$ is obtained by successively taking kernels of the finitely many outgoing bottom-row differentials. Each target has fiber degree $r-1>0$ and total degree $i-1$, hence lies in $\mathcal C$; the image is a subquotient in $\mathcal C$. Successive short exact sequences show $E^2_{i,0}/E^\infty_{i,0}\in\mathcal C$. Since $F$ is path-connected, $E^2_{i,0}=H_i(B;\mathbb Z)$, and [F5] identifies the resulting edge with $p_*$. Its kernel and cokernel are in $\mathcal C$, proving clause 1. [F1, F2, F3, F5, step 1.1]

2.2 Because $B$ is path-connected and simply connected, $H_0(B,*;M)=H_1(B,*;M)=0$ for every constant $M$. In total degree $i\leq n$, every term of (1) off the bottom row consequently has $s\geq2$ and $1\leq t\leq n-2$. For those indices, [F4] has tensor term $H_s(B)\otimes H_t(F)$ and Tor term $\operatorname{Tor}_1(H_{s-1}(B),H_t(F))$. Both factors in each term lie in the Serre ring by the displayed hypotheses, so both terms and then $E^2_{s,t}$ lie in $\mathcal C$. [A1, F2, F4, step 1.2]

3.1 The bottom row of (1) is $E^2_{s,0}=H_s(B,*;\mathbb Z)$. Repeating the finite base-edge argument of step 2.1, now for (1), shows that the edge $H_i(E,F)\to H_i(B,*)$ has kernel filtered by the off-bottom stable terms and cokernel filtered by the images of outgoing bottom-row differentials. Every such group lies in $\mathcal C$ by step 2.2. The quotient filtration is induced by the pair map, so its bottom edge is exactly the map of pairs $p_*$. This proves clause 2 for every $i\leq n$. [F2, F3, F5, step 1.2, step 2.1, step 2.2]

4.1 When $N=0$, clause 1 uses only path-connectedness and gives the isomorphism on $H_0$. When $n=2$, the fiber range $0<t<n-1$ is empty and the off-bottom relative triangle is empty because columns zero and one vanish. Empty fiber is excluded by path-connectedness; the zero ring is not involved because coefficients are integral, but the zero group and zero Serre class are included. One basepoint cell is deleted in step 1.2, and extra zero-cells are handled by the relative cellular boundary before $E_2$. Degenerate singular simplices remain legitimate finite representatives. Both tensor and Tor ends of [F4], both Serre ideal/ring branches, both kernel and cokernel of each edge, and both finite-filtration endpoints are checked. AC is assumed as required by [F4] and its freeness supplier; no representatives are selected pagewise. There is no iff, no splitting claim, and no assertion beyond the stated bounds. [A1, F1, F2, F3, F4, F5, F6, step 1.1, step 1.2, step 2.1, step 2.2, step 3.1] ∎

## Source notes

[Miller, Lecture 30](https://ocw.mit.edu/courses/18-906/algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf), Proposition 30.7 and Proposition 30.8 with proofs, printed pp. 107–108. Proposition 30.7 is the all-degree version of clause 1; Proposition 30.8 is clause 2 and explicitly uses the relative Serre spectral sequence. The finite ranges and the relative quotient-filtration construction are spelled out above.
