---
id: thm-additive-adele-quotient-discrete-cocompact-for-q-and-fq-t
kind: theorem
title: "The rational and rational-function fields are discrete and cocompact in their additive adeles"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-adele-ring-of-a-global-field
  - def-quotient-group
  - def-quotient-topology
  - def-topological-group
  - def-product-topology
  - thm-metric-hausdorff-separation
  - def-global-field
  - def-place-of-a-global-field
  - def-completion-of-a-global-field-at-a-place
  - def-local-field-valuation-ring-uniformizer-and-residue-field
  - thm-local-valuation-ring-compact-open
  - thm-tychonoff
  - def-axiom-of-choice
  - def-countable-choice
  - thm-p-adic-completion-agrees-with-the-fraction-field-of-zp
  - thm-bezout-identity
  - thm-fundamental-theorem-of-arithmetic
  - cor-polynomial-ring-over-a-field-is-euclidean
  - lem-polynomial-factorisation-into-irreducibles
  - lem-integer-part
dependency_level: 5
proof_strategy: direct
axiom_use: >-
  Countable Choice is inherited through the local compactness theorem for local
  valuation rings. Full Choice is used for the Tychonoff compactness of the
  infinite products in the compact fundamental sets. The reduction of an
  adele to those sets is explicit and uses no choice axiom beyond selecting
  finitely many local approximants.
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - title: "William A. Stein, Algebraic Number Theory: A Computational Approach"
      url: "https://wstein.org/books/ant/ant.pdf"
      locator: "Chapter 18, §18.3, Theorem 18.3.5, printed pp.187–188. The printed proof is for Q."
    - title: "Andrew V. Sutherland, MIT 18.785 Number Theory I lecture notes, Fall 2021"
      url: "https://math.mit.edu/classes/18.785/2021fa/LectureNotes.pdf"
      locator: "Lecture 25, Theorem 25.12 and proof, pp.7–8, including Q and F_q(t)."
verification:
  precheck: n/a

---

## Statement

Assume the Axiom of Choice and the Axiom of Countable Choice. For $F=\mathbb Q$ and for $F=\mathbb F_q(t)$, where $\mathbb F_q$ is a finite field, the diagonal additive subgroup $F$ is discrete and closed in the additive adele group $\mathbb A_F^+$, and the quotient topological group $\mathbb A_F^+/F$ is compact. Here discrete means that the identity has an open neighborhood meeting the diagonal subgroup only at zero, and compactness of the quotient means compactness for its quotient topology.

## Statement references

[[def-adele-ring-of-a-global-field|Additive adeles and restricted-product topology]]

[[def-global-field|Rational and rational-function global fields]]

[[thm-local-valuation-ring-compact-open|Compact open valuation rings]]

[Stein, Theorem 18.3.5](https://wstein.org/books/ant/ant.pdf)

[MIT 18.785 Lecture 25, Theorem 25.12](https://math.mit.edu/classes/18.785/2021fa/LectureNotes.pdf)

## Facts & Assumptions

**Given:** AC and AC_omega; either $F=\mathbb Q$ or $F=\mathbb F_q(t)$; the adeles and completions at all places.

[A1] AC makes arbitrary products of compact spaces compact by Tychonoff's theorem. ([[def-axiom-of-choice]], [[thm-tychonoff]])

[A2] AC_omega is a hypothesis of the local compact-open theorem used for valuation rings. ([[def-countable-choice]], [[thm-local-valuation-ring-compact-open]])

[F1] A completion contains a dense isometric image of the global field; the valuation ring of a nonarchimedean completion is its closed unit ball. ([[def-completion-of-a-global-field-at-a-place]], [[def-place-of-a-global-field]], [[def-local-field-valuation-ring-uniformizer-and-residue-field]])

[F2] For each rational prime $p$, the valuation ring in $\mathbb Q_p$ is $\mathbb Z_p$, identified with the closed unit ball in the fraction field of $\mathbb Z_p$. ([[thm-p-adic-completion-agrees-with-the-fraction-field-of-zp]])

[F3] The places of $\mathbb F_q(t)$ are the place at infinity and the places indexed by monic irreducible polynomials $P\in\mathbb F_q[t]$; their valuations are degree or order valuations, and the global field is dense in every completion. ([[def-global-field]], [[def-place-of-a-global-field]], [[def-completion-of-a-global-field-at-a-place]])

[F4] Integers factor into rational primes, and polynomials over a field factor into irreducibles; Bezout's identity supplies an inverse modulo a coprime prime power. ([[thm-fundamental-theorem-of-arithmetic]], [[lem-polynomial-factorisation-into-irreducibles]], [[thm-bezout-identity]], [[cor-polynomial-ring-over-a-field-is-euclidean]])

[F5] Every local valuation ring occurring here is compact. ([[def-local-field-valuation-ring-uniformizer-and-residue-field]], [[thm-local-valuation-ring-compact-open]])

[F6] For every real $x$ there is an integer $m$ with $m\le x<m+1$. ([[lem-integer-part]])

[F7] The additive quotient is the group quotient by the diagonal subgroup with its quotient topology; the quotient map is continuous, and a compact set of representatives has compact image equal to the whole quotient. ([[def-quotient-group]], [[def-quotient-topology]], [[def-topological-group]])

[F8] Every local completion is a Hausdorff topological field, and the restricted-product topology is finer than the topology induced by the product of the local fields; therefore the additive adele group is Hausdorff. ([[def-adele-ring-of-a-global-field]], [[def-completion-of-a-global-field-at-a-place]], [[thm-metric-hausdorff-separation]])

[F9] On the subset $\prod_v\mathcal O_v$, the restricted-product topology agrees with the product of the local valuation-ring topologies: a restricted basic neighborhood uses $\mathcal O_v$ at all but finitely many places. ([[def-adele-ring-of-a-global-field]], [[def-product-topology]])

## Proof


**Given:** The fields and hypotheses in the Statement.

1.1 For $F=\mathbb Q$, write an adele as $(x_\infty,(x_p)_p)$. Let $S$ be the finite set of primes for which $x_p\notin\mathbb Z_p$. For each $p\in S$, density in [F1] gives a rational $r_p$ with $x_p-r_p\in\mathbb Z_p$. Write $r_p=a_p/(p^{e_p}b_p)$ with $p\nmid b_p$. By [F4] choose $c_p\in\mathbb Z$ such that $b_pc_p\equiv1\pmod {p^{e_p}}$ and put $q_p=a_pc_p/p^{e_p}$. Then $r_p-q_p\in\mathbb Z_p$, so $x_p-q_p\in\mathbb Z_p$; also $q_p\in\mathbb Z_\ell$ for every prime $\ell\ne p$. Thus $q_0=\sum_{p\in S}q_p$ makes every finite coordinate of $x-q_0$ integral. [F1, F2, F4, given, choose]

1.2 For $F=\mathbb F_q(t)$, let $S$ be the finite set of finite places $P$ where $x_P$ is not in its valuation ring. For each $P\in S$, density [F1] gives $r_P=a_P/(P^{e_P}b_P)$ with $a_P,b_P\in\mathbb F_q[t]$ and $P\nmid b_P$, such that $x_P-r_P$ is integral at $P$. By [F4], choose $c_P$ with $b_Pc_P\equiv1\pmod {P^{e_P}}$ and set $q_P=a_Pc_P/P^{e_P}$. Then $r_P-q_P$ is integral at $P$, while $q_P$ is integral at every other finite place because its only possible finite denominator factor is $P$. Therefore subtracting $q_0=\sum_{P\in S}q_P$ makes all finite coordinates integral. [F1, F3, F4, given, choose]

1.3 In the rational case, the open neighborhood $U_{\mathbb Q}=(-1,1)\times\prod_p\mathbb Z_p$ meets the diagonal $\mathbb Q$ only at zero: a rational integral at every $p$ is an integer by [F4], and the only integer in $(-1,1)$ is zero. In the function-field case, $U_{\mathbb F_q(t)}=t^{-1}\mathcal O_\infty\times\prod_{P\text{ finite}}\mathcal O_P$ is open. A rational function integral at every finite place is a polynomial, since any nonconstant reduced denominator has an irreducible factor by [F4]; a polynomial in $t^{-1}\mathcal O_\infty$ must be zero because its infinity valuation is nonpositive unless it is zero. Hence this neighborhood meets the diagonal only at zero. [F3, F4, F5, given]

2.1 Choose $n=\lfloor x_\infty-q_0\rfloor$ by [F6]. Then $x-(q_0+n)$ lies in $D_{\mathbb Q}=[0,1]\times\prod_p\mathbb Z_p$, since $n$ is integral at every finite prime and the real coordinate lies in $[0,1)$. The set $D_{\mathbb Q}$ is compact: $[0,1]$ and every $\mathbb Z_p$ are compact, the induced topology is the product topology by [F9], and [A1] applies. Its image under the quotient map is the whole quotient, hence $\mathbb A_{\mathbb Q}^+/\mathbb Q$ is compact. [A1, F2, F5, F6, F7, F9, step 1.1, choose]

2.2 The completion at infinity is dense by [F1], so choose $r\in\mathbb F_q(t)$ such that $y-r$ is integral at infinity, where $y=x_\infty-q_0$. Polynomial division writes $r=g+h/b$, where $g\in\mathbb F_q[t]$ and either $h=0$ or $\deg h<\deg b$; hence $h/b$ is integral at infinity, so $r-g$ is integral there and therefore $y-g$ is integral there. Since $g$ is integral at every finite place, subtracting $q_0+g$ gives a representative in $D_{\mathbb F_q(t)}=\prod_v\mathcal O_v$. Every factor is compact by [F5], the induced topology is the product topology by [F9], and [A1] makes this product compact with quotient image the whole quotient. [A1, F1, F3, F5, F7, F9, step 1.2, construct]

3.1 Coordinatewise addition and negation on $\mathbb A_F^+$ are continuous: at a given pair, add the finite exceptional places for the two adeles and the target neighborhood, use local continuity there, and use $\mathcal O_v+\mathcal O_v\subseteq\mathcal O_v$ and $-\mathcal O_v=\mathcal O_v$ elsewhere. Thus $\mathbb A_F^+$ is a topological group; it is Hausdorff by [F8]. In a Hausdorff topological group, a subgroup isolated at the identity is closed. Indeed, choose an identity neighborhood $U$ meeting the subgroup only at zero and a symmetric neighborhood $V$ with $V-V\subseteq U$. If $x$ is in the subgroup's closure, $x+V$ meets the subgroup in at most one point; every smaller neighborhood of $x$ still meets it, so that point lies in every neighborhood of $x$ and equals $x$ by Hausdorffness. [F1, F8, step 1.3, construct, algebra] ∎

