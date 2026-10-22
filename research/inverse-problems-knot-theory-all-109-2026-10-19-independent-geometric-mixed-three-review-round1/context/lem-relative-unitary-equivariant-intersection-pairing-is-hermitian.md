---
id: lem-relative-unitary-equivariant-intersection-pairing-is-hermitian
kind: lemma
title: Hermitian symmetry of the relative equivariant intersection pairing
status: draft
origin: pipeline
deps:
  - thm-compact-collared-manifold-local-coefficient-lefschetz-duality-in-zf
  - lem-involutive-twisted-chain-duals-realize-local-coefficient-duality
  - def-cup-and-cap-products-with-local-coefficient-pairings
  - lem-canonical-twisted-fundamental-classes-over-compact-subsets
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Cochran, Orr and Teichner, Knot concordance, Whitney towers and
        L2-signatures
      url: https://arxiv.org/pdf/math/9908117
      locator: Equivariant intersection form convention
    - title: Hatcher, Algebraic Topology
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
      locator: Cup product and cochain homotopies
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
---

## Statement

Let $W$ be a compact connected oriented topological four-manifold with supplied boundary collar, and let $R$ be an involutive unital ring. Supply a based rank-one right-$R$ local system $\mathcal R$, a base-fiber identification with $R$, unitary monodromy and its parallel standard Hermitian form. For $p\in H_2(W;\mathcal R)$ let $a_p\in H^2(W,\partial W;\mathcal R^\vee)$ be the inverse cap-duality image of $\bar p$, using the form to identify the intrinsic dual system with $\overline{\mathcal R}$. Define
$$\lambda(p,q)=\langle j(a_p),q\rangle,$$
where $j$ forgets the relative condition and the last pairing is intrinsic cochain evaluation. Then
$$\lambda(p,q)=\overline{\lambda(q,p)}$$
for all $p,q$. In particular $\lambda(\ell_i,d_j)=\delta_{ij}$ implies $\lambda(d_j,\ell_i)=\delta_{ij}$. No choice axiom, triangulation or geometric transversality of surfaces in dimension four is required.

## Facts & Assumptions

**Given:** The compact collared manifold, ring, unitary local system and its supplied standard Hermitian structure.

[F1] Relative cap duality holds for arbitrary abelian-group local systems and commuting scalar actions; unitary Hermitian structures identify intrinsic dual systems with conjugate systems. [[thm-compact-collared-manifold-local-coefficient-lefschetz-duality-in-zf]], [[lem-involutive-twisted-chain-duals-realize-local-coefficient-duality]]

[F2] Cup and cap are given by front/back faces and coefficient transport, and their associativity identity is checked on these faces. The relative orientation class is represented by a finite integral chain with boundary in $\partial W$. [[def-cup-and-cap-products-with-local-coefficient-pairings]], [[lem-canonical-twisted-fundamental-classes-over-compact-subsets]]

## Proof

1.1 On the dual coefficient fibers and their conjugates, the natural evaluation pairing is the ring-valued pairing $(a,\bar b)\mapsto a\bar b$ in a unitary frame. This is transport-invariant: dual transport is $a\mapsto au^{-1}$, conjugate-dual transport on the second factor corresponds to $\bar b\mapsto u\bar b$, and their product is unchanged. Its transposed conjugate pairing has the same value, since $\overline{b\bar a}=a\bar b$. Thus the reversed-factor cup product followed by involution can be compared with the original product in the same constant abelian-group coefficient system $R$. This does not exchange factors inside a noncommutative product without applying the involution. [F1, given, construct, algebra]

2.1 Choose relative dual two-cocycles $\alpha,\beta$ representing $a_p,a_q$. Conjugation turns $\beta$ into a right-coefficient cocycle whose relative cap is $q$. The front-evaluation cap in [F2] retains the back face: $\overline\beta$ is evaluated on the front face to give the coefficient of $q$, while $\alpha$ evaluates its retained back face. Consequently the exact formulas, with the transport evaluation of step 1.1, are $$\lambda(p,q)=\langle\tau(\overline\beta\smile\alpha),[W,\partial W]\rangle,\qquad\overline{\lambda(q,p)}=\langle\alpha\smile\overline\beta,[W,\partial W]\rangle.$$ Here $\tau$ means reverse the two coefficient factors and use the pairing of step 1.1, so the coefficient product in the second expression is still ordered as the value of $\alpha$ followed by the conjugate value of $\beta$. Both cocycles vanish on simplices contained in $\partial W$. [F1, F2, step 1.1, construct, algebra]

3.1 The needed cup interchange is an explicit finite cochain identity. For a singular three-simplex with ordered vertices $0123$, put $$H(0123)=\alpha(013)\,\overline{\beta(123)}-\alpha(023)\,\overline{\beta(012)}.$$ Every factor is transported to the first vertex before pairing; for the first product this transports the second factor from vertex1 to vertex0. On each singular four-simplex the pulled-back local systems are trivialized by its straight vertex paths, so coefficient transports obey the face identities and the calculation reduces to the same displayed ring products. Expanding the five terms of $\delta H(01234)$ and using $\delta\alpha=\delta\beta=0$ gives $$\delta H(01234)=\alpha(012)\,\overline{\beta(234)}-\alpha(234)\,\overline{\beta(012)}.$$ For clarity the unreduced expansion is $\alpha(124)\overline{\beta(234)}-\alpha(134)\overline{\beta(123)}-\alpha(024)\overline{\beta(234)}+\alpha(034)\overline{\beta(023)}+\alpha(014)\overline{\beta(134)}-\alpha(034)\overline{\beta(013)}-\alpha(014)\overline{\beta(124)}+\alpha(024)\overline{\beta(012)}+\alpha(013)\overline{\beta(123)}-\alpha(023)\overline{\beta(012)}$; substituting the four-face cocycle identities groups it into the two displayed terms. Coefficient multiplication retains its order throughout. Hence $\delta H=\alpha\smile\overline\beta-\tau(\overline\beta\smile\alpha)$. This is the degree-two cup-one homotopy written out locally; no commutative-ring cup-interchange theorem is being applied in a broader scope. [F2, step 1.1, step 2.1, construct, algebra]

4.1 Since $\alpha,\beta$ are relative, $H$ vanishes on every simplex in $\partial W$. If $z$ is the finite relative orientation cycle, then $\langle\delta H,z\rangle=\langle H,\partial z\rangle=0$. Evaluating the identity of step 3.1 and using step 2.1 proves the asserted Hermitian equality. For the cross terms, apply the equality and $\bar1=1,\bar0=0$. The cochains were chosen only for the two given classes, each simplex calculation involved finitely many faces, and the evaluation used a single finite orientation chain. All coefficient identifications were relative to the supplied standard form. Thus no choice principle or surface transversality assertion has entered. [F1, F2, step 1.1, step 2.1, step 3.1, algebra] ∎
