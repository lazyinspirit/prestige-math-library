---
id: lem-upper-unitriangular-coordinate-ring-is-coconnected
kind: lemma
title: "Coconnected Hopf algebras: the coordinate ring of U_n and passage to quotients"
dependency_level: 5
deps:
  - def-axiom-of-choice
  - def-coconnected-hopf-algebra
  - def-upper-unitriangular-group-scheme
  - lem-general-linear-group-scheme-and-its-coordinate-ring
  - lem-hopf-ideal-kernels-and-quotients
  - thm-closed-subgroup-schemes-correspond-to-hopf-ideals
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
status: published
origin: pipeline
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
      locator: Theorem 14.5(b) and its proof, printed pp. 281-282
    - title: J. S. Milne, Algebraic Groups (v2.00, 20 December 2015 author-hosted preliminary edition)
      url: https://www.jmilne.org/math/CourseNotes/iAG200.pdf
      locator: Theorem 15.5, implication (b) to (c), printed p. 253
---
## Statement

Let $k$ be a field and $n\ge1$. Then:

(a) $O(U_n)=k[X_{ij}\mid1\le i<j\le n]$ is a coconnected Hopf algebra: assigning weight $j-i$ to each generator $X_{ij}$ and letting $C_r$ be the span of the monomials of weight at most $r$ gives a filtration satisfying $\Delta(C_r)\subseteq\sum_{i+j=r}C_i\otimes_kC_j$;

(b) if $A\to B$ is a surjective morphism of commutative Hopf algebras over $k$ and $A$ is coconnected, then $B$ is coconnected;

(c) assuming the Axiom of Choice ([[def-axiom-of-choice]]), if $H\subseteq U_n$ is a closed subgroup scheme, then $O(H)$ is a quotient of $O(U_n)$ and hence coconnected.

## Facts & Assumptions
**Given:** A field $k$, an integer $n\ge1$, and the Hopf algebra $O(U_n)=k[X_{ij}:i<j]$ of [[def-upper-unitriangular-group-scheme]] with the displayed comultiplication.

[F1] A commutative Hopf algebra $A$ is coconnected when it has an increasing filtration $(C_r)$ with $C_0=k\cdot1$, $\bigcup_rC_r=A$ and $\Delta(C_r)\subseteq\sum_{i+j=r}C_i\otimes_kC_j$; the filtration need not be finite in each degree. ([[def-coconnected-hopf-algebra]])

[F2] $O(U_n)$ is a polynomial algebra on the entries strictly above the diagonal with $\Delta(X_{ij})=X_{ij}\otimes1+1\otimes X_{ij}+\sum_{i<l<j}X_{il}\otimes X_{lj}$, $\varepsilon(X_{ij})=0$, and counit/antipode compatible with these formulas. ([[def-upper-unitriangular-group-scheme]])

[F3] Assuming AC for the geometric closed-subscheme/quotient-ring conversion, a closed subgroup scheme $H\subseteq U_n$ has coordinate ring $O(H)=O(U_n)/I$ for the Hopf ideal $I$ of functions vanishing on $H$, and the quotient of a commutative Hopf algebra by a Hopf ideal carries the quotient Hopf algebra structure. ([[thm-closed-subgroup-schemes-correspond-to-hopf-ideals]], [[lem-hopf-ideal-kernels-and-quotients]], [[lem-general-linear-group-scheme-and-its-coordinate-ring]])

## Proof

**Given:** A field $k$, an integer $n\ge1$, and the Hopf algebra $O(U_n)$.

1.1 Declare the weight of the monomial $\prod X_{ij}^{a_{ij}}$ to be $\sum_{i<j}a_{ij}(j-i)$, and let $C_r$ be the $k$-span of the monomials of weight at most $r$. Then $C_0=k\cdot1$, the $C_r$ increase, and $\bigcup_rC_r=O(U_n)$ because every polynomial is a finite sum of monomials of bounded weight. On the generators, [F2] gives $\Delta(X_{ij})=X_{ij}\otimes1+1\otimes X_{ij}+\sum_{i<l<j}X_{il}\otimes X_{lj}$, and the three kinds of terms have total weight $j-i$, $j-i$, and $(l-i)+(j-l)=j-i$; hence $\Delta(X_{ij})\in\sum_{a+b=j-i}C_a\otimes C_b$. Since $\Delta$ is a $k$-algebra homomorphism from the tensor product and the weights add under multiplication, $\Delta(\prod X_{ij}^{a_{ij}})\in\sum_{a+b=r}C_a\otimes C_b$ for a monomial of weight $r$, and the condition $\Delta(C_r)\subseteq\sum_{a+b=r}C_a\otimes C_b$ follows for all $r$ by linearity. This proves (a). [F1, F2, algebra]

1.2 Let $\pi:A\to B$ be a surjective morphism of commutative Hopf algebras and let $(C_r)$ be a coconnected filtration on $A$. Put $D_r=\pi(C_r)$. Then $D_0=k\cdot1_B$ because $\pi$ preserves units and $C_0=k\cdot1_A$; the $D_r$ increase and exhaust $B$ because $\pi$ is surjective; and, since $\pi\otimes\pi$ is surjective onto $B\otimes B$ with $(\pi\otimes\pi)(C_i\otimes C_j)=D_i\otimes D_j$, the comultiplication of $B$ satisfies $\Delta_B(D_r)=(\pi\otimes\pi)\Delta_A(C_r)\subseteq\sum_{i+j=r}D_i\otimes D_j$. Hence $B$ is coconnected, which proves (b). [F1, algebra]

2.1 Assume AC and let $H\subseteq U_n$ be a closed subgroup scheme. By [F3] the coordinate ring of $H$ is the quotient $O(U_n)/I$ by the Hopf ideal $I$ of functions vanishing on $H$, and $\pi:O(U_n)\to O(H)$ is a surjective morphism of commutative Hopf algebras. By [step 1.1] $O(U_n)$ is coconnected, so [step 1.2] applied to $\pi$ shows that $O(H)$ is coconnected. This proves (c) and completes the proof. [F3, step 1.1, step 1.2] ∎ 