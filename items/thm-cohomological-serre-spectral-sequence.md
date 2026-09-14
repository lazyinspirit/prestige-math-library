---
id: thm-cohomological-serre-spectral-sequence
kind: theorem
title: Cohomological Serre spectral sequence
status: draft
origin: pipeline
pipeline_run: phase-2-next-18
deps: [def-fiber-homology-local-system-of-a-serre-fibration, lem-relative-homology-over-one-base-cell-is-the-shifted-fiber-homology, thm-the-cohomological-filtered-complex-construction, thm-cellular-cochains-compute-cohomology-with-local-coefficients, def-axiom-of-choice, def-serre-filtration-of-the-total-space-over-base-skeleta, thm-long-exact-sequence-of-a-pair-in-singular-cohomology, thm-excision-for-singular-cohomology, def-relative-singular-cochain-complex, lem-cellular-attachments-with-finite-boundary-support-form-a-cw-complex, thm-cellular-approximation-for-maps-of-cw-pairs, prop-relative-cw-inclusions-are-cofibrations, prop-a-fibration-has-path-lifting-and-homotopy-lifting-relative-to-a-subspace, thm-singular-chain-homotopy-formula, thm-universal-coefficient-theorem-for-cohomology-over-a-pid, thm-long-exact-sequence-in-cohomology, def-r-page-of-the-spectral-sequence-of-a-filtered-complex, def-strong-convergence-of-a-spectral-sequence, prop-local-coefficient-homology-and-cohomology-are-functorial-for-a-map-with-a-coefficient-morphism]
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Hatcher, Algebraic Topology, Theorem 5.15"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch5.pdf"
      locator: "§5.1, printed pp. 542–545"
---

## Statement

Assume the Axiom of Choice. Let $p:E\to B$ be a Serre fibration over a
path-connected CW complex and let $R$ be a commutative unital ring. The
decreasing skeletal filtration gives a natural first-quadrant cohomological
spectral sequence
$$E_2^{a,b}\cong H^a\bigl(B;\mathcal H^b(p;R)\bigr),\qquad d_r:E_r^{a,b}\longrightarrow E_r^{a+r,b-r+1},$$
strongly converging to $H^{a+b}(E;R)$ with the finite image filtration
$$F^aH^n(E;R)=\operatorname{im}\bigl(H^n(E,E_{a-1};R)\to H^n(E;R)\bigr),\qquad H^n=F^0H^n\supseteq\cdots\supseteq F^{n+1}H^n=0.$$
Its stable terms have the specified natural identifications
$$E_\infty^{a,n-a}\cong F^aH^n(E;R)/F^{a+1}H^n(E;R).$$

For a square of fibrations over a cellular map $f:B\to B'$ with total map
$u:E\to E'$, naturality is contravariant: $u^*$ gives page maps from the
sequence for $p'$ to that for $p$, and on $E_2$ it is the local-coefficient
map for $f$ and the coefficient morphism
$f^*\mathcal H^b(p';R)\to\mathcal H^b(p;R)$ induced by the strict-fiber maps.

The raw cochain filtration is not asserted to be degreewise finite. Strong
convergence follows from the finite-quotient comparison below. AC is used in
the cohomological local-system/cellular comparison and in the cohomological
universal coefficient argument; it is not hidden.

## Facts & Assumptions

**Given:** AC, the Serre fibration, the decreasing skeletal cochain filtration, and the cohomological fiber local system with reversed-path transport.

[A1] [[def-axiom-of-choice]] is assumed throughout.

[F1] [[thm-the-cohomological-filtered-complex-construction]] constructs all cohomological pages, their bidegrees, first-page relative groups, and functorial maps. Its degreewise-finite abutment clause will be applied only to an explicitly finite quotient filtration.

[F2] [[lem-relative-homology-over-one-base-cell-is-the-shifted-fiber-homology]] supplies the finite disk, hemisphere, excision, and fiber-transport geometry over each base cell. [[thm-long-exact-sequence-of-a-pair-in-singular-cohomology]] and [[thm-excision-for-singular-cohomology]] give the reversed cohomological connectors and excision maps. [[def-fiber-homology-local-system-of-a-serre-fibration]] fixes reversed-path cohomology transport, and [[thm-cellular-cochains-compute-cohomology-with-local-coefficients]] computes its cellular cochain complex under AC.

[F3] [[def-serre-filtration-of-the-total-space-over-base-skeleta]] identifies $F^aC^*(E;R)$ with the relative cochains vanishing on $E_{a-1}$. [[def-relative-singular-cochain-complex]] identifies these with $C^*(E,E_{a-1};R)$.

[F4] [[lem-cellular-attachments-with-finite-boundary-support-form-a-cw-complex]] realizes a finite relative singular chain on a finite CW pair. [[thm-cellular-approximation-for-maps-of-cw-pairs]], [[prop-relative-cw-inclusions-are-cofibrations]], and [[prop-a-fibration-has-path-lifting-and-homotopy-lifting-relative-to-a-subspace]] give the finite relative cellular deformation and its lift. [[thm-singular-chain-homotopy-formula]] gives the relative prism identity.

[F5] Under [A1], [[thm-universal-coefficient-theorem-for-cohomology-over-a-pid]] converts vanishing of two adjacent relative integral homology groups into relative cohomology vanishing with coefficient group $(R,+)$. [[thm-long-exact-sequence-in-cohomology]] compares a cochain complex with a quotient by an acyclic range. The finite-window clause of [[def-r-page-of-the-spectral-sequence-of-a-filtered-complex]] compares the required pages, and [[def-strong-convergence-of-a-spectral-sequence]] records the finite-filtration convergence conditions.

[F6] [[prop-local-coefficient-homology-and-cohomology-are-functorial-for-a-map-with-a-coefficient-morphism]] gives the contravariant cohomology map for the reversed coefficient morphism.

## Proof

**Proof technique:** cohomological cell connectors followed by finite-quotient convergence.

1.1 Apply [F1] to $K^*=C^*(E;R)$ with the decreasing filtration [F3]. It gives $$E_1^{a,b}=H^{a+b}(E_a,E_{a-1};R)$$ and differentials of bidegree $(r,1-r)$. No convergence clause of [F1] is invoked yet. [F1, F3]

1.2 We first prove the relative vanishing needed for convergence. Let $m\geq0$, $0\leq k\leq m$, and let $c$ be a finite relative integral $k$-cycle for $(E,E_m)$. Realize its finitely many simplices and faces by [F4] on a finite CW complex $K$ of dimension at most $k$; the support of $\partial c$ generates a subcomplex $L\subseteq K$ mapping into $E_m$. Apply finite cellular approximation to $pv|_L:L\to B^m$. Extend that base homotopy over $K$ by the cofibration clause in [F4] and lift the extension starting at $v:K\to E$. The endpoint is cellular on $L$. Now apply relative cellular approximation to $(K,L)\to(B,B^m)$ rel $L$ and lift it rel $L$. The final projection is cellular, so its image lies in $B^k\subseteq B^m$, while the combined homotopy of $L$ stays in $B^m$. The prism identity makes $c$ equal, modulo a boundary and a chain in $E_m$, to a chain entirely in $E_m$. Thus $$H_k(E,E_m;\mathbb Z)=0\qquad(0\leq k\leq m).$$ Every construction is finite and this step itself uses no choice. [F4]

2.1 Fix an oriented $a$-cell. Use the same finite lifted disk and nested hemispheres as [F2], but apply cohomology contravariantly. Excision and the pair sequences in [F2] give, by $a$ successive positive connecting maps, $$H^b(F_{x_e};R)\xrightarrow{\sim}H^{a+b}(p^{-1}(\overline e),p^{-1}(\partial e);R).$$ For $a=0$ this is the identity. At each suspension step the two endpoint restrictions have diagonal image; its cokernel identifies the two endpoint coordinate maps with opposite signs, fixing the orientation sign. To separate all cells, use [F2]'s one uniform radial collar, enlarge $E_{a-1}$ to the inverse image of the outer collar, and excise a smaller closed collar. The remaining pair is the disjoint union of the pulled-back concentric cell pairs. Every singular simplex in this union lies in one component, so its relative integer chain complex is the direct sum of the component complexes; [F3] therefore identifies its relative cochain complex with their product. Kernels are coordinatewise, and [A1] lets one choose a primitive in every nonempty coordinate primitive set, so the image of the product coboundary is the product of its images. Cohomology consequently splits as the product, giving $$E_1^{a,b}\cong C^a_{\mathrm{cell}}\bigl(B;\mathcal H^b(p;R)\bigr).$$ The reversed base path in the coefficient system is exactly the contravariant fiber map used by these connectors. [A1, F2, F3, Step 1.1]

2.2 By [F3], $F^{m+1}K^*=C^*(E,E_m;R)$. Its integral relative chain groups are free on the singular simplices not lying in $E_m$. Under [A1], the UCT in [F5] has outer terms $$\operatorname{Ext}^1_{\mathbb Z}(H_{k-1}(E,E_m;\mathbb Z),R),\qquad \operatorname{Hom}_{\mathbb Z}(H_k(E,E_m;\mathbb Z),R).$$ Both vanish for $k\leq m$ by Step 1.2, so $$H^k(F^{m+1}K^*)=H^k(E,E_m;R)=0\qquad(k\leq m).$$ This is the only convergence step that uses UCT and it explicitly carries [A1]. [A1, F3, F5, Step 1.2]

3.1 Naturality of the cohomological pair connectors and excision maps reduces $d_1$ to the attaching incidences. The reflected interval calculation in Step 2.1 gives the negative incidence sign, and contravariance reverses the fiber path, so the resulting matrix is precisely the cellular local-coefficient coboundary. The cellular comparison in [F2] therefore gives $$E_2^{a,b}\cong H^a\bigl(B;\mathcal H^b(p;R)\bigr).$$ Since $E_1$ is first quadrant, every later page is first quadrant. [A1, F1, F2, Step 2.1]

3.2 Fix total degree $n\geq0$ and set $N=2n+3$. Step 2.2 gives $H^n(F^NK)=H^{n+1}(F^NK)=0$. Apply the long exact sequence in [F5] to $$0\longrightarrow F^NK\longrightarrow K\longrightarrow K/F^NK\longrightarrow0$$ and also to $0\to F^NK\to F^aK\to F^aK/F^NK\to0$ for $0\leq a\leq n+1$. It follows that $H^n(K)\to H^n(K/F^NK)$ is an isomorphism identifying every image-filtration term $F^aH^n$. The quotient filtration has finite endpoints $F^0=K/F^NK$ and $F^N=0$, so [F1] gives its natural finite abutment. [F1, F5, Step 2.2]

4.1 For a square over a cellular $f$, one has $u(E_a)\subseteq E'_a$. Precomposition therefore sends a cochain vanishing on $E'_{a-1}$ to one vanishing on $E_{a-1}$, so $u^*$ is a filtered cochain map. Functoriality in [F1] gives the contravariant maps on all pages. The cellwise constructions in Steps 2.1–3.1 are natural, and [F6] identifies the $E_2$ map with $f^*$ for the coefficient morphism $f^*\mathcal H^b(p';R)\to\mathcal H^b(p;R)$. [F1, F6, Step 2.1, Step 3.1]

4.2 At a position $(a,b)$ with $a+b=n$, both incident cohomological differentials vanish once $r>\max(a,b+1)$: the incoming source then has negative first coordinate, and the outgoing target has negative second coordinate. Put $s=\max(a,b+1)+1\leq n+2$. Under the reindexing in [F1], quotienting by $F^NK$ removes a chain-filtration piece below the finite window used through page $s$, since $N=2n+3\geq a+s+1$. The finite-window clause of [F5] therefore identifies the original and quotient pages through their stationary page at $(a,b)$. The quotient's finite abutment from Step 3.2 consequently gives the specified natural identification $$E_\infty^{a,b}\cong F^aH^n(E;R)/F^{a+1}H^n(E;R).$$ [F1, F5, Step 3.1, Step 3.2]

5.1 The definition gives $F^0K=K$, hence $F^0H^n=H^n$. Taking $m=n$ and $k=n$ in Step 2.2 gives $H^n(F^{n+1}K)=0$, hence $F^{n+1}H^n=0$. Thus the target filtration has finite endpoints and is exhaustive, separated, and complete by [F5]. Step 4.2 proves two-sided regularity and the actual associated-graded identifications, so all strong-convergence conditions hold. The quotient comparisons and actual cocycle maps are functorial, so these identifications are compatible with Step 4.1. [F3, F5, Step 4.1, Step 2.2, Step 4.2]

6.1 If $B=\varnothing$, then $E=\varnothing$ and all groups vanish. Empty fibers give zero stalks, and the zero ring gives zero cochains. The cases $a=0$, $b=0$, $n=0$, a single cell, constant or degenerate simplices, repeated filtration terms, and the first/last target pieces occur in Steps 1.1–5.1. Step 4.2 checks both incident differential bounds, and Step 5.1 checks both finite endpoints and both associated-graded directions. All product-of-images and UCT uses cite [A1]; finite cellular deformations do not. The theorem has no iff assertion. [A1, F1, F2, F3, F4, F5, F6, Step 1.1, Step 1.2, Step 2.1, Step 2.2, Step 3.1, Step 3.2, Step 4.1, Step 4.2, Step 5.1] ∎
