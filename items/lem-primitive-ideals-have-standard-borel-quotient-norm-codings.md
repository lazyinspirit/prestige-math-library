---
id: lem-primitive-ideals-have-standard-borel-quotient-norm-codings
kind: lemma
title: "Primitive ideals have standard Borel quotient-norm codings"
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
dependency_level: 3
deps:
  - lem-c-star-state-gns-purity-and-polish-state-space
  - lem-pure-state-excision-and-essential-orbit-density
  - lem-quotient-of-a-c-star-algebra-by-a-closed-two-sided-ideal-is-a-c-star-algebra
  - lem-c-star-positive-calculus-and-order-estimates
  - lem-c-star-algebras-and-closed-ideals-have-positive-contractive-approximate-units
  - lem-bounded-density-and-finite-vector-transitivity-for-c-star-representations
  - def-primitive-ideal-space-of-a-group-c-star-algebra
  - thm-baire-category-for-complete-metric-spaces
  - thm-metric-completion-exists
  - lem-standard-complete-metric-on-a-countable-product
  - thm-complete-and-totally-bounded-implies-compact
  - lem-borel-subspaces-admit-polish-presentations
  - def-standard-borel-space
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
axiom_use: "AC is explicit; inherited supplier choice and the exact local selections are identified in the Proof. No global selector of irreducible equivalence classes is asserted."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: "Ilijas Farah, Combinatorial Set Theory of C*-algebras (2019), complete author-hosted book"
      url: "https://ifarah.mathstats.yorku.ca/files/2022/07/2019_Book_CombinatorialSetTheoryOfC-alge.pdf"
      locator: "Theorem5.2.1, Lemmas5.2.2 and5.2.5, Proposition5.2.8, printed141–144; complete passages read; excision algebra and the nonunital step are supplied locally."
    - title: "Bruce Blackadar, Operator Algebras, complete author text"
      url: "https://bruceblackadar.com/Mathematics/Cycr.pdf"
      locator: "II.6.5.13–16 printed122–123; complete passages read. Open kernel, separable Baire and prime/primitive proofs are expanded locally, without importing the referred Choquet theorem."
---

## Statement

Assume AC. For a separable C*-algebra $A$, bounded quotient C*-seminorms on a countable rational-complex dense star algebra code all closed ideals in a compact metrizable space. The proper primitive codes form a Borel subset; this standard Borel structure equals the Borel structure of the hull-kernel topology. Every proper closed prime ideal is primitive. The pure-state-to-GNS-kernel map is continuous and open onto $\operatorname{Prim}(A)$, and $\operatorname{Prim}(A)$ is Baire. A proper ideal is prime when two closed ideals with product contained in it cannot both strictly contain it; primitive means a kernel of an irreducible representation.

## Facts & Assumptions

**Given:** The Statement hypotheses and AC.

[F1] GNS purity, separability, Polish pure states and pure norming states are supplied by [[lem-c-star-state-gns-purity-and-polish-state-space]]; pure-state neighborhood cutoffs are supplied by [[lem-pure-state-excision-and-essential-orbit-density]].

[F2] Quotients are C*-algebras, positive continuous calculus is natural under star-homomorphisms, and ideal approximate units exist ([[lem-quotient-of-a-c-star-algebra-by-a-closed-two-sided-ideal-is-a-c-star-algebra]], [[lem-c-star-positive-calculus-and-order-estimates]], [[lem-c-star-algebras-and-closed-ideals-have-positive-contractive-approximate-units]]).

[F3] In a nondegenerate irreducible image, bounded density approximates every contraction on finite vectors ([[lem-bounded-density-and-finite-vector-transitivity-for-c-star-representations]]). The hull-kernel convention is [[def-primitive-ideal-space-of-a-group-c-star-algebra]].

[F4] Baire's theorem, a complete weighted metric for countable products, complete-and-totally-bounded compactness and Borel Polish presentations and metric completion have local proofs ([[thm-baire-category-for-complete-metric-spaces]], [[thm-metric-completion-exists]], [[lem-standard-complete-metric-on-a-countable-product]], [[thm-complete-and-totally-bounded-implies-compact]], [[lem-borel-subspaces-admit-polish-presentations]], [[def-standard-borel-space]]).

[A1] AC supplies countable dense families and the declared supplier hypotheses ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

**Given:** The Statement hypotheses and Facts.

1.1 Choose a countable norm-dense rational-complex star subalgebra $D=\{d_n\}$, by closing a countable dense family under finite rational-complex sums, products and adjoints. For a pure state $\phi$, cyclicity gives $\|\pi_\phi(a)\|^2=\sup_d\phi(d^*a^*ad)/\phi(d^*d)$, where $d\in D$ and positive denominators are retained: the vectors $\pi_\phi(d)\xi$ are dense, and the ratios are their squared norm quotients. Hence strict quotient-norm superlevel sets pull back to unions of the open tests $\phi(d^*d)>0$, $\phi(d^*a^*ad)>r^2\phi(d^*d)$. In the hull-kernel topology $\{J:\|a+J\|>r\}$ is open, since it says the positive cutoff $(|a|-r)_+$ is not in $J$. These opens generate that topology: every ideal-open is a union of such tests. Thus the kernel map is continuous. [F1, F2, F3, A1, algebra]

2.1 Let $O$ be open in $P(A)$ and $\phi\in O$. By [F1] there is $a\ge0$, $\|a\|=\phi(a)=1$ and $0<\epsilon<1$ with $U_{a,\epsilon}\cap P(A)\subseteq O$. Its kernel image is exactly $\{J:\|a+J\|>1-\epsilon\}$. One inclusion follows from $\psi(a)\le\|\pi_\psi(a)\|$. For the other, in an irreducible representation with kernel $J$ the norm of a positive operator is the supremum of its expectations on unit vectors, so such a vector yields a pure vector state in $U_{a,\epsilon}$ with the same kernel. Therefore the image of $O$ is open, and the map is onto by taking a unit cyclic vector in any irreducible representation. It is consequently continuous, open and surjective. [F1, F2, step 1.1, algebra]

2.2 There is a countable cofinal family of nonzero ideals: from a countable dense family of positive contractions $a_n$ take every nonzero $(a_n-r)_+$ for positive rational $r$. If $J\ne0$, approximate a positive norm-one $b\in J$ within $\delta<1/4$ and choose $\delta<r<1/2$; its cutoff belongs to $J$ by quotient calculus and is nonzero. Moreover these ideal-opens form a countable base: if $J_0$ avoids an ideal $K$, choose $b\in K^+$ with $\|b\|=1$, $\|b+J_0\|>0$, and approximate closely enough that a cutoff lies in $K$ but remains nonzero modulo $J_0$. Its ideal-open contains $J_0$ and is contained in the ideal-open of $K$. [F2, step 1.1, A1, algebra]

2.3 Code a seminorm $q$ by $(q(d_n))_n\in\prod_n[0,\|d_n\|]$, imposing the rational-complex seminorm laws, $q(xy)\le q(x)q(y)$, $q(x^*)=q(x)$ and $q(x^*x)=q(x)^2$. These are countably many closed equations or inequalities. The product has a complete weighted metric by [F4]; finitely approximating its first coordinates and ignoring the small metric tail proves total boundedness, hence compactness by [F4]. Every such $q$ is norm-Lipschitz, since $|q(x)-q(y)|\le q(x-y)\le\|x-y\|$, so it extends uniquely to $A$. Its kernel is a closed ideal. The metric completion of its quotient seminorm exists by [F4]; multiplication extends along Cauchy sequences by submultiplicativity and boundedness of Cauchy sequences, the isometric adjoint extends as well, and the C*-identity passes to limits. It is therefore a C*-algebra; the induced injective star map from the usual C*-quotient $A/\ker q$ to that completion is isometric: if a positive element lost norm, a continuous spectral cutoff vanishing at0 and supported above the image norm would be nonzero but mapped to0, contradicting injectivity. Thus $q(a)=\|a+\ker q\|$. Conversely every closed ideal gives these laws. This proves the claimed compact metrizable code space of all closed ideals. [F2, F4, step 1.1, algebra]

3.1 If $V_n$ are dense open subsets of $\operatorname{Prim}(A)$, their inverse images are dense open subsets of $P(A)$: every nonempty pure-state open set has nonempty open image by step 2.1, which meets $V_n$. The Polish pure-state space is Baire by [F1,F4], so their intersection meets the preimage of every nonempty primitive open set. Thus $\operatorname{Prim}(A)$ is Baire. The zero algebra gives empty pure and primitive spaces and the same assertion vacuously. [F1, F4, step 2.1, algebra]

4.1 Primitive kernels are prime. Indeed, in an irreducible representation the support projection of any represented ideal is a commuting projection, hence is0 or1. If two ideal images are nonzero, their approximate units converge strongly to1; their products cannot all vanish. Now suppose $A$ is nonzero and prime. For each nonzero ideal $I$, its ideal-open is dense in $\operatorname{Prim}(A)$: any nonempty basic ideal-open comes from nonzero $K$, and primeness makes $IK\ne0$. A pure norming state detecting a nonzero positive element of $IK$ gives a primitive kernel avoiding both $I$ and $K$. Baire applied to the cofinal countable ideals of step 2.2 gives a primitive kernel avoiding all of them. That kernel must be0, since any nonzero ideal contains one of the cofinal ideals. Applying this to $A/J$ proves every proper closed prime $J$ is primitive. [F1, F2, step 3.1, step 2.2, algebra]

5.1 Fix a countable dense family $(c_k)$ in the unit ball of $A$, including it in $D$. A proper quotient code is primitive exactly when, for every $a,b\in D$, $\sup_k q(ac_kb)=q(a)q(b)$. For a primitive quotient, choose a faithful irreducible representation, vectors nearly attaining the norms of $b$ and $a$, and a contraction linking the normalized output of $b$ to a near-norming input of $a$. Bounded density [F3] approximates this linker on that vector; quotient-norm lifting and density of $(c_k)$ then prove the equality. Conversely, if the quotient is not prime, two nonzero ideals with zero product give nonzero $a,b$ for which all $acb=0$. Continuity in $a,b$ makes this violate a test with $a,b\in D$. Step 4.1 identifies proper prime and primitive quotients. The countable supremum tests are Borel coordinate conditions; excluding the zero quotient is the Borel condition $\exists d\ q(d)>0$. Thus primitive codes are Borel. [F2, F3, step 4.1, step 2.3, algebra]

6.1 Coordinate strict superlevels are hull-kernel open by step 1.1, and their countable Boolean combinations give the inverse images of every real Borel interval. Conversely step 2.2 gives a countable ideal-open base, each expressible as a countable union of coordinate norm tests. Hence the code Borel structure equals the hull-kernel-topology Borel structure. The primitive-code subset is standard Borel by [F4]. Together with steps 2.1, 2.2, 3.1 and 4.1 this proves all assertions, without appealing to Choquet's theorem or a standardness claim for arbitrary second-countable $T_0$ spaces. [F4, step 1.1, step 2.1, step 3.1, step 2.2, step 4.1, step 5.1] ∎
