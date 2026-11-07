---
id: lem-cm-unit-power-lattice-has-full-profinite-congruence-topology
kind: lemma
title: "A real power lattice of CM units has the full profinite congruence topology"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - def-cm-algebra-and-cm-type
  - thm-dirichlet-unit-theorem
  - thm-ring-of-integers-free-of-rank-degree
  - lem-roots-of-unity-in-a-number-field-are-finite
  - thm-kronecker-root-of-unity-criterion
  - cor-the-galois-group-of-a-rational-cyclotomic-field
  - thm-fundamental-theorem-of-finite-galois-theory
  - def-global-artin-map-as-product-of-local-reciprocity-maps
  - thm-global-artin-reciprocity-and-norm-index
  - thm-number-field-finite-weak-approximation-in-zf
  - lem-unramified-local-unit-norms-and-cohomology
  - thm-local-artin-reciprocity-and-norm-index
  - thm-local-artin-unramified-frobenius-normalization
  - def-idele-group-of-a-global-field
  - def-profinite-completion-of-an-abstract-group
  - thm-inverse-limit-of-finite-discrete-groups-is-hausdorff-compact-and-totally-disconnected
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, The Fundamental Theorem of Complex Multiplication (2007)"
      url: "https://arxiv.org/pdf/0705.3446"
      locator: "Lemma3.6, printed21, complete passage read; its cited Chevalley congruence-topology theorem is reconstructed below, not imported."
    - title: "J. S. Milne, Class Field Theory, version4.03"
      url: "https://www.jmilne.org/math/CourseNotes/CFT.pdf"
      locator: "ChapterVII AppendixA, PropositionsA.1–A.5, printed226–227, and ChapterVIII Theorems1.1/1.4 and proof, printed229–230, read; finite-power-loss and finite congruence separation below supplied locally."
verification: {}
---

## Statement

Assume AC. Let $E$ be a CM number field of degree $2g$, let $V=O_E^\times$, let $\mu_E$ be its finite group of roots of unity, put $w=|\mu_E|$, and put $U=V^w=\{v^w:v\in V\}$. Then $U$ is a free abelian group of rank $g-1$, of finite index in $V$, fixed pointwise by complex conjugation. For every integer $n\ge1$ there is an integer $M\ge1$ such that
$$u\in U,\quad u-1\in MO_E\quad\Longrightarrow\quad u\in U^n.$$
Consequently the topology on $U$ induced by the finite idele group of $E$ is exactly its full profinite topology. For its closure $\overline U\subset\mathbb A_{f,E}^{\times}$, every choice of integral basis $U\cong\mathbb Z^{g-1}$ extends to an isomorphism of compact topological groups $\widehat{\mathbb Z}^{\,g-1}\cong\overline U$. This assertion concerns the full product over finite places and asserts no injectivity at a single $p$-adic place or Leopoldt theorem.

## Facts & Assumptions

**Given:** AC and the CM field $E$ with the defined unit groups. No unit-congruence theorem, Chebotarev theorem or local-global power principle is supplied as an assumption.

[A1] AC implies DC and Countable Choice for the Artin and compactness interfaces. [[def-axiom-of-choice]] [[thm-choice-implies-dependent-implies-countable-choice]]

[F1] A CM field is a totally imaginary quadratic extension of a totally real field with its conjugation. Its units are $\mu_E\times\mathbb Z^{g-1}$; the integer ring has a full integral basis; roots of unity in a number field are finite, and an algebraic integer whose conjugates all have absolute value at most one is a root of unity. [[def-cm-algebra-and-cm-type]] [[thm-dirichlet-unit-theorem]] [[thm-ring-of-integers-free-of-rank-degree]] [[lem-roots-of-unity-in-a-number-field-are-finite]] [[thm-kronecker-root-of-unity-criterion]]

[F2] The rational cyclotomic Galois group is the full unit group modulo its index. Finite Galois correspondence identifies subgroups with their fixed fields. [[cor-the-galois-group-of-a-rational-cyclotomic-field]] [[thm-fundamental-theorem-of-finite-galois-theory]]

[F3] Global arithmetic Artin is a continuous product of local maps, kills principal elements, and is onto the Galois group of every actual finite abelian extension. Finite weak approximation holds for number fields. [[def-global-artin-map-as-product-of-local-reciprocity-maps]] [[thm-global-artin-reciprocity-and-norm-index]] [[thm-number-field-finite-weak-approximation-in-zf]]

[F4] In a finite unramified local extension every unit is a norm. Local Artin has its norm subgroup as kernel and sends a uniformizer to arithmetic Frobenius on unramified extensions. [[lem-unramified-local-unit-norms-and-cohomology]] [[thm-local-artin-reciprocity-and-norm-index]] [[thm-local-artin-unramified-frobenius-normalization]]

[F5] Finite ideles have the restricted-product topology, whose identity neighborhoods in the unit product are finite systems of unit congruences. Profinite completion is the inverse limit of finite quotient groups; an inverse limit of finite groups is Hausdorff and, under AC, compact. [[def-idele-group-of-a-global-field]] [[def-profinite-completion-of-an-abstract-group]] [[thm-inverse-limit-of-finite-discrete-groups-is-hausdorff-compact-and-totally-disconnected]]

## Proof

1.1 For $v\in V$, the algebraic unit $v/\bar v$ has every complex conjugate of absolute value one: each embedding intertwines CM conjugation with ordinary complex conjugation. By [F1] it belongs to $\mu_E$. Therefore $v^w=\bar v^w$ and every element of $U$ is real. Using the unit decomposition in [F1], choose a free unit basis so $V\cong\mu_E\times\mathbb Z^r$ with $r=g-1$. Then $U$ corresponds to $\{1\}\times w\mathbb Z^r$. Thus $U$ is free of rank $r$ and has finite index. If $r=0$, $U=1$, every claimed implication is immediate with $M=1$, and its closure and completion are trivial. Below the same arguments also allow $r=0$. [A1, F1, given, choose, algebra]

1.2 Fix a rational prime $p$. There is an integer $c\ge1$ (take $c\ge2$ for $p=2$) such that $E\cap\mathbb Q(\mu_{p^k})\subset\mathbb Q(\mu_{p^c})$ for all $k$. Indeed these intersections form an increasing chain of subfields of the finite-degree field $E$; every strict increase increases their degrees, so only finitely many can occur. For $k>c$, put $L=E(\mu_{p^k})$, choose a primitive $p^k$-th root $\zeta$, and write $G=\operatorname{Gal}(L/E)$. This group is abelian. Restriction identifies it with the subgroup of the rational cyclotomic Galois group fixing $E\cap\mathbb Q(\mu_{p^k})$: the fixed field in $\mathbb Q(\mu_{p^k})$ of the restriction image is exactly its intersection with $E$, so [F2] gives the equality. Hence $G$ contains $g$ with $g\zeta=\zeta^{1+p^c}$. Suppose $u\in V$ admits a $p^k$-th root $x\in L$. Write $h(x)=\zeta^{a_h}x$ and $h(\zeta)=\zeta^{\chi(h)}$ for $h\in G$. Commutativity gives $p^c a_h=(\chi(h)-1)a_g$ modulo $p^k$. Therefore $y=x^{p^c}\zeta^{-a_g}$ is fixed by every $h$ and lies in $E$. Its $p^{k-c}$-th power equals $u$ times a root of unity, so $u=\epsilon y^{p^{k-c}}$ for some $\epsilon\in\mu_E$. Since $u$ and $\epsilon$ are units, all finite valuations of $y$ vanish and $y\in V$. This proves the uniform finite-power-loss implication
$$u\in V\cap L^{\times p^k}\quad\Longrightarrow\quad u\in\mu_E V^{p^{k-c}}.$$
No assertion that a root in a cyclotomic extension already lies in $E$ is made; the loss $c$ expressly includes the $2$-primary exceptional cases. [F1, F2, given, choose, construct, algebra]

1.3 We need the following weak prime detection, which follows from the actual global Artin theorem. Let $D/L$ be a nontrivial finite abelian extension of totally imaginary number fields and let $S$ be any finite set of finite places containing all ramified places. Choose a nonidentity element of $\operatorname{Gal}(D/L)$ and an idele $z$ mapping to it by [F3]. At each place in $S$, continuity gives an identity neighborhood in the kernel of the local map. By finite weak approximation choose $a\in L^\times$ so that $a^{-1}z_v$ lies in that kernel for every $v\in S$. Global reciprocity kills $a$. At each remaining place the extension is unramified; unit factors are killed by [F4], and a uniformizer contributes Frobenius to its integer valuation. The Artin image of $a^{-1}z$ is thus a finite product of Frobenius powers outside $S$. It is nonidentity, so at least one such Frobenius is nonidentity. This proves existence of a detecting prime outside any prescribed finite set, using neither density nor Chebotarev. Finiteness of the ramified set can be seen directly by choosing an integral primitive polynomial for the extension: away from its finitely many discriminant divisors it defines an etale algebra and its field factors are unramified. [A1, F3, F4, given, choose, construct, algebra]

2.1 Fix $t\ge1$ and the prime $p$, and choose $k>c$ such that $h=k-c\ge t+v_p(w)$. Put $N=p^k$ and $L=E(\mu_N)$. The quotient $U/U^N$ is finite by step 1.1. Choose one representative $u_i$ of each of its finitely many classes. For every representative not in $L^{\times N}$, the field $D_i=L(u_i^{1/N})$ is a nontrivial cyclic extension: all its roots are $u_i^{1/N}\mu_N$, it is the splitting field of a separable polynomial, and its Galois group injects into the cyclic group $\mu_N$ by the quotient of a root and its conjugate. By step 1.3 choose a prime $Q_i$ of $L$, away from $p$ and all its ramification, with nonidentity Frobenius in $D_i/L$. The residue of $u_i$ at $Q_i$ is not an $N$-th power. Indeed $u_i$ is a unit, and the $N$ roots of unity have distinct reductions because the residue characteristic does not divide $N$. If the residue of $u_i$ had an $N$-th root, all the roots of its polynomial would be in the base residue field, so Frobenius would fix the reduction of every root and hence each actual root, since their reductions are distinct. That contradicts its nonidentity. This is a finite family of choices. [F1, F2, F3, F4, step 1.1, step 1.2, step 1.3, choose, construct, algebra]

3.1 Choose an integer $M_p\ge1$ divisible by the rational primes below all the $Q_i$ chosen in step 2.1 (use $1$ if that list is empty). If $u\in U$ satisfies $u\equiv1\pmod{M_pO_E}$, it cannot have the class of any of these representatives in $U/U^N$. For $u=u_i v^N$ would reduce to a non-$N$-th-power at $Q_i$, whereas its own reduction is $1$. Hence $u\in L^{\times N}$. Step 1.2 gives $u\in\mu_E V^{p^h}$. In the free unit coordinates of step 1.1 its vector is both $w b$ for $b\in\mathbb Z^r$ and divisible by $p^h$. Thus every coordinate of $b$ is divisible by $p^{h-v_p(w)}$, hence by $p^t$. Its torsion coordinate is $1$ because $u\in U$. It follows that $u\in U^{p^t}$. For a general $n=\prod p^{t_p}$, take $M$ to be the product of the finitely many $M_p$. The implication gives $u\in\bigcap_{p\mid n}U^{p^{t_p}}=U^n$, with the equality immediate in the free integral coordinates. For $n=1$ take $M=1$. [F1, step 1.1, step 1.2, step 2.1, construct, algebra]

4.1 Every finite-index subgroup of $U\cong\mathbb Z^r$ contains $U^n$ for some $n$, since its finite quotient has an exponent. Step 3.1 therefore shows every such subgroup is open in the induced congruence topology. Conversely every finite system of unit congruences has finite index, because $O_E$ modulo a nonzero ideal is a finite ring; this finiteness follows by choosing an integer contained in that ideal and an integral basis of $O_E$. Thus the induced topology is exactly the profinite topology. This unit product is an open subgroup of the finite idele group, hence also closed, so it contains the ambient closure of $U$. The unit product $\prod_vO_{E_v}^\times$ is the inverse limit of the finite unit residue quotients over finite lists of places and depths: local completeness identifies each unit group with its finite-quotient inverse limit. The homomorphism $U\to\prod_vO_{E_v}^\times$ consequently extends to its profinite completion $\widehat U$. Its image is compact by [F5] and hence closed in the Hausdorff target, and contains $U$, so it is exactly $\overline U$. It is injective: for any finite quotient $U/U^n$, step 3.1 gives a congruence quotient whose kernel on $U$ is contained in $U^n$; the same factorization on inverse limits shows a point in the kernel maps to zero in every $U/U^n$ and is zero. Finally $U^n$ is cofinal among finite-index subgroups of a free group of rank $r$, so $\widehat U=\varprojlim_n(\mathbb Z/n\mathbb Z)^r=\widehat{\mathbb Z}^{\,r}$. This proves the topology and closure assertions. [A1, F1, F5, step 1.1, step 3.1, construct, algebra] ∎

## Source-reading boundary

The cached Milne2007 Lemma3.6, printed21, was read in full; it cites Chevalley's theorem rather than proving the unit topology. Milne CFT VII AppendixA A.1–A.5, printed226–227, and VIII Theorems1.1/1.4 and their displayed proofs, printed229–230, were read as Kummer/local-power context. Some algebraic Kummer proofs there are referred to Milne's field-theory notes; none is imported here. The finite-power-loss cocycle, weak prime detection from actual global Artin, finite unit-class separation and profinite-completion calculation are proved locally. No general local-global power assertion, Grunwald–Wang theorem, Chevalley theorem, Leopoldt conjecture or Chebotarev theorem is assumed.
