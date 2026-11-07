---
id: ex-additive-adele-fundamental-domains-for-q-and-fqt
kind: example
title: "Compact additive adele representatives for Q and F_q(t)"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-adele-ring-of-a-global-field
  - def-global-field
  - def-place-of-a-global-field
  - def-product-topology
  - def-compact-space
  - thm-p-adic-completion-agrees-with-the-fraction-field-of-zp
  - cor-polynomial-ring-over-a-field-is-euclidean
  - lem-polynomial-factorisation-into-irreducibles
  - lem-integer-part
dependency_level: 5
proof_strategy: direct
axiom_use: >-
  No choice axiom is used. Fix one ordering of the finite field; all places,
  residue digits and finite cylinders then have explicit orders. Digit
  expansions and the least bad cylinder recursion are uniquely specified.
  Compactness is proved directly, without Tychonoff or a compactness supplier
  carrying AC or Countable Choice.
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "William A. Stein, Algebraic Number Theory: A Computational Approach"
      url: "https://wstein.org/books/ant/ant.pdf"
      locator: "Chapter 18, §18.3, Theorem 18.3.5, printed pp.187–188."
    - title: "Andrew V. Sutherland, MIT 18.785 Number Theory I lecture notes, Fall 2021"
      url: "https://math.mit.edu/classes/18.785/2021fa/LectureNotes.pdf"
      locator: "Lecture 25, Theorem 25.12 and proof, pp.7–8."

---

## Example

For $\mathbb Q$, the compact set $D_{\mathbb Q}=[0,1]\times\prod_p\mathbb Z_p$ in $\mathbb A_{\mathbb Q}^+$ meets every additive coset modulo the diagonal $\mathbb Q$. For $\mathbb F_q(t)$, the compact set $D_q=\prod_v\mathcal O_v$, over its place at infinity and all finite places, meets every additive coset modulo the diagonal $\mathbb F_q(t)$.

## Example references

[[def-adele-ring-of-a-global-field|Additive adele restricted product]]

[[def-compact-space|Open-cover compactness]]

[Stein, Theorem 18.3.5](https://wstein.org/books/ant/ant.pdf)

[MIT 18.785 Lecture 25, Theorem 25.12](https://math.mit.edu/classes/18.785/2021fa/LectureNotes.pdf)

## Facts & Assumptions

**Given:** The fields and sets in the Example. In the function-field case fix an ordering of the one finite set $\mathbb F_q$; the conclusion is independent of that ordering.

[F1] The restricted-product topology has basic products with valuation-ring factors at all but finitely many finite places. Its restriction to the displayed representative sets is the product topology. Only this explicit topology formula is used; the choice assumptions attached to the general global-field interface are not invoked. ([[def-adele-ring-of-a-global-field]], [[def-product-topology]])

[F2] The rational finite places are indexed by primes, and the rational-function places by monic irreducible polynomials and infinity. Integer and polynomial division give unique residue representatives $0,\ldots,p-1$ and the polynomials of degree less than $\deg P$, respectively. The completion at a place is formed from Cauchy sequences for its valuation. ([[def-global-field]], [[def-place-of-a-global-field]], [[thm-p-adic-completion-agrees-with-the-fraction-field-of-zp]], [[cor-polynomial-ring-over-a-field-is-euclidean]], [[lem-polynomial-factorisation-into-irreducibles]])

[F3] Compactness means that every open cover has a finite subcover; a product basic open set restricts finitely many coordinates. Every real number has an integer part. ([[def-compact-space]], [[def-product-topology]], [[lem-integer-part]])

## Proof

**Given:** The fields and sets in the Example, with the finite coefficient ordering fixed above.

1.1 At a rational prime $p$, successive division gives the unique expansion $x=\sum_{j\ge0}a_jp^j$ for $x\in\mathbb Z_p$, with $0\le a_j<p$. At a finite function-field place $P$, division in $\mathbb F_q[t]$ gives $x=\sum_{j\ge0}a_jP^j$ for $x\in\mathcal O_P$, with $\deg a_j<\deg P$. To see this directly for a completion element, approximate it modulo the next power by a rational function integral at $P$; its denominator is invertible modulo that power by the Euclidean algorithm. The resulting residue is unique, so no selection of approximants is needed to define the digit. Conversely, the partial sums of any such digit sequence are Cauchy and define a completion element. At infinity use the uniformizer $t^{-1}$ and digits in $\mathbb F_q$. Equality of the first $n$ digits is exactly congruence modulo the $n$th power of the uniformizer, so these digit correspondences are homeomorphisms. [F2, given, construct]

2.1 Order rational primes increasingly and monic irreducibles by degree and then coefficient order. Enumerate all pairs consisting of a place and a nonnegative digit position by the diagonal enumeration of $\mathbb N^2$. Thus each product of valuation rings in the Example is homeomorphic to $\prod_{n\ge0}A_n$, where each $A_n$ is an explicitly ordered finite nonempty digit alphabet. For any open cover of this digit product, suppose there is no finite subcover. Starting with the empty cylinder, recursively take the first one-digit extension whose cylinder has no finite subcover. Such an extension exists: if all the finitely many extensions had finite subcovers, their union would cover the parent with finitely many members. This uniquely defined recursion produces a digit sequence $a$. A cover member containing $a$ contains one of its prefix cylinders, contradicting the defining property of that cylinder. Hence every such digit product is compact, with no use of countable choice. [F1, F2, F3, step 1.1, construct]

2.2 For a rational adele $x$, only finitely many coordinates $x_p$ are nonintegral. At each such prime the digit expansion has a finite negative part $r_p=\sum_{j=-e_p}^{-1}a_{p,j}p^j\in\mathbb Q$. It satisfies $x_p-r_p\in\mathbb Z_p$ and is integral at every other finite prime. Hence $r=\sum_pr_p$ makes every finite coordinate of $x-r$ integral. Set $m=\lfloor x_\infty-r\rfloor$. Subtracting the diagonal rational $r+m$ leaves its real coordinate in $[0,1)$ and its finite coordinates integral, so the result belongs to $D_{\mathbb Q}$. All sums here are finite. [F1, F2, F3, step 1.1, construct]

2.3 For a rational-function adele $x$, at each of its finitely many nonintegral finite places take the negative part $r_P=\sum_{j=-e_P}^{-1}a_{P,j}P^j\in\mathbb F_q(t)$. Its only possible finite pole is at $P$, so subtracting $r=\sum_Pr_P$ makes every finite coordinate integral. The infinity coordinate of $x-r$ has a finite negative part in powers of $t^{-1}$, namely a polynomial $g(t)$ with zero constant coefficient. Subtracting $g$ removes that negative part and preserves integrality at every finite place. Thus $x-(r+g)$ lies in $D_q$. [F1, F2, step 1.1, construct]

3.1 Add a binary digit sequence to the digit product for $\prod_p\mathbb Z_p$ and map it to $[0,1]$ by $(b_j)_{j\ge1}\mapsto\sum_{j\ge1}b_j2^{-j}$. This map is continuous by the uniform tail bound $2^{-n}$ and surjective by greedy binary expansion, with $1$ represented by the all-ones sequence. Together with the valuation-ring digit maps it is therefore a continuous surjection onto $D_{\mathbb Q}$. Its domain is another product of explicitly ordered finite alphabets, compact by step 2.1. Pulling back an arbitrary open cover and taking a finite subcover proves that $D_{\mathbb Q}$ is compact. Step 2.1 directly proves compactness of $D_q$, including its infinity factor. [F1, F3, step 1.1, step 2.1, construct]

4.1 Steps 2.2 and 2.3 give a representative of every additive coset in the respective displayed set, and step 3.1 proves both sets compact. This proves the unchanged Example. [step 3.1, step 2.2, step 2.3] ∎
