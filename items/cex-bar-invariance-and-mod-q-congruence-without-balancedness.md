---
id: cex-bar-invariance-and-mod-q-congruence-without-balancedness
kind: counterexample
title: "Bar invariance and the congruence modulo $q$ do not imply balancedness"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-balanced-triple-and-globalization-map, def-crystal-lattice-and-crystal-basis, def-lower-global-basis-of-a-quantum-highest-weight-module, def-the-local-ring-at-q-zero, thm-existence-bar-invariance-and-uniqueness-of-the-lower-global-basis, thm-quantized-sl-two-string-formulas]
justified_by: []
aliases: []
landmark: false
dependency_level: 15
proof_strategy: constructive
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Kyeonghoon Jeong, Seok-Jin Kang and Masaki Kashiwara, Crystal Bases for Quantum Generalized Kac-Moody Algebras, arXiv:math/0305390"
      url: "https://arxiv.org/pdf/math/0305390"
      locator: "§8, printed pp. 50–51: Definition 8.1 and Theorem 8.2, against which the computation is checked."
    - title: "Masaki Kashiwara, On crystal bases of the q-analogue of universal enveloping algebras, Duke Mathematical Journal 63 (1991), 465–516"
      url: "https://webpages.math.luc.edu/~ptingley/oldseminars/QuantumGroupsSpring2011/Kashiwara91.pdf"
      locator: "§7.1, printed pp. 509–511: the chart lemma whose hypotheses are violated."
    - title: "Math 263C Quantum Groups (Stanford, 2022), lecture slides 'Lusztig's quantum group. Tilting modules. The Fusion Category in Action'"
      url: "http://sporadic.stanford.edu/quantum/lecture16.pdf"
      locator: "Slide 'Certain important elements' and 'The restricted quantum group': the divided-power lattice against the naive lattice, context for the contrast between $[n]!$ and $1$."
---

## Statement refuted

The proposed implication is: bar-fixedness of an integral vector with a prescribed nonzero crystal residue forces balancedness and unique global lifts. The following two witnesses refute it.

(1) In the two-dimensional module $V=\mathbb Q(q)v\oplus\mathbb Q(q)w$ for $\mathfrak{sl}_2$ (with $v$ of weight $1$, $w=Fv$ of weight $-1$), take $M_A=V_A=Av\oplus Aw$ and the full free $A_0$-lattice $L'=A_0(v+w)\oplus qA_0v$, with bar lattice $\psi(L')=A_\infty(v+w)\oplus q^{-1}A_\infty v$. Then $E_{\mathbb Z}=V_A\cap L'\cap\psi(L')=\mathbb Z(v+w)$, while $V_A\cap L'=\mathbb Z[q](v+w)\oplus q\mathbb Z[q]v$, so the canonical integral residue map is not surjective and misses the nonzero residue class $qv+qL'$. The bar-fixed vector $v+w$ has its prescribed residue, but $L'$ is neither weight decomposed nor stable under the Kashiwara operators.

(2) In the one-dimensional trivial module $\mathbb Q(q)v$ with $\varepsilon$-action, $M_A=Av$, bar fixing $v$, all Kashiwara operators zero and the full free scaled $A_0$-lattice $L''=q^{-1}A_0v$ with bar lattice $qA_\infty v$, the canonical integral residue map has kernel $\mathbb Zv\oplus\mathbb Zqv$; the two distinct bar-fixed integral vectors $(q+q^{-1})v$ and $(q+q^{-1})v+v$ have the same nonzero residue class $q^{-1}v+qL''$. This is a genuine nonuniqueness witness even though $L''$ is a valid scaled crystal lattice satisfying a congruence condition, and neither example is the canonical top-normalized Kashiwara triple of a highest weight module.

## Facts & Assumptions

**Given:** The $\mathfrak{sl}_2$-module data of [[thm-quantized-sl-two-string-formulas]] in the library conventions $Kv=qv$, $Kw=q^{-1}w$, $Fv=w$, $Fw=0$, $Ev=0$, $Ew=v$, with $V_A=Av\oplus Aw$ and $\psi(v)=v$, $\psi(w)=w$, $\psi(q)=q^{-1}$; the trivial module $\mathbb Q(q)v$ with $Kv=v$, $Ev=Fv=0$; the balanced-triple definitions of [[def-balanced-triple-and-globalization-map]] and [[def-lower-global-basis-of-a-quantum-highest-weight-module]]; the crystal-lattice axioms of [[def-crystal-lattice-and-crystal-basis]]; and the uniqueness theorem [[thm-existence-bar-invariance-and-uniqueness-of-the-lower-global-basis]].

[L1] Balancedness ([[def-balanced-triple-and-globalization-map]]): the triple $(M_A,L_0,L_\infty)$ is balanced exactly when the canonical map $E_{\mathbb Z}=M_A\cap L_0\cap L_\infty\to(M_A\cap L_0)/(M_A\cap qL_0)$ is an isomorphism; this is the canonical integral residue map, whose inverse, when it exists, is the globalization map; uniqueness of global lifts with a given residue is the injectivity of this map.

[L2] Crystal lattices ([[def-crystal-lattice-and-crystal-basis]]): a crystal lattice is a full free $A_0$-lattice $L$ with $L=\bigoplus_\mu(L\cap M_\mu)$, each weight piece free, and stable under all Kashiwara operators. A specified weight-compatible residue basis is additional crystal-basis data. In the trivial module there is only the zero weight and all Kashiwara operators vanish, so every full free scaled $A_0$-lattice is a crystal lattice there.

[L3] Cartan data ([[thm-quantized-sl-two-string-formulas]]): in the two-dimensional module $q$-powers are computed from $Kv=qv$, $Kw=q^{-1}w$; in the trivial module the action is by $\varepsilon$ so no $q$-power appears on $v$.

[L4] Local rings ([[def-the-local-ring-at-q-zero]]): $A_0$ consists of the elements of $\mathbb Q(q)$ regular at $q=0$, is generated inside $\mathbb Q(q)$ by $Z[q]$ and inverses of polynomials nonzero at $0$, and $A_\infty=\psi(A_0)$; consequently $A\cap A_0=\mathbb Z[q]$, $A\cap A_\infty=\mathbb Z[q^{-1}]$, $A_0\cap A_\infty\cap A=\mathbb Z$ and $A\cap q^{-1}A_0=q^{-1}\mathbb Z[q]$.

[L5] The canonical triple ([[thm-existence-bar-invariance-and-uniqueness-of-the-lower-global-basis]]): the balanced map of the genuine Kashiwara triple is an isomorphism, so any failure or nonuniqueness below is a property of the displayed non-canonical lattices, not a defect of the globalization theorem.

## Proof

**Proof technique:** constructive.

1.1 **Witness (1): the balanced intersection and the missing residue class.** Write $a:=v+w$ and $t:=v$, so $L'=A_0a\oplus qA_0t$ and $V_A=Av\oplus Aw=Aa\oplus At$, while $V=\mathbb Q(q)a\oplus\mathbb Q(q)t$; these identities follow from $w=a-t$ and $v=t$. An element $\alpha a+\beta t$ with $\alpha\in A_0$, $\beta\in qA_0$ lies in $V_A=Av\oplus Aw$ exactly when $\alpha\in A_0\cap A=\mathbb Z[q]$ and $\beta\in qA_0\cap A=qZ[q]$, so $V_A\cap L'=\mathbb Z[q]a\oplus q\mathbb Z[q]t$. Similarly $\psi(L')=A_\infty a\oplus q^{-1}A_\infty t$, and the triple intersection is $$E_{\mathbb Z}=V_A\cap L'\cap\psi(L')=\bigl(\mathbb Z[q]\cap\mathbb Z[q^{-1}]\bigr)a\oplus\bigl(q\mathbb Z[q]\cap q^{-1}\mathbb Z[q^{-1}]\bigr)t=\mathbb Z a,$$ by [L4]. The integral residue of the zero chart is $(V_A\cap L')/(V_A\cap qL')=\mathbb Z[q]a/q\mathbb Z[q]a\oplus q\mathbb Z[q]t/q^2\mathbb Z[q]t$, which contains the nonzero class $qt+qL'=qv+qL'$. The balanced map sends $\mathbb Za$ onto the classes of integer multiples of $a$ and therefore misses that class, so the triple is not balanced by [L1]. [L1, L4, construct]

1.2 **Witness (2): the rank-three balanced intersection.** For the trivial module $L''=q^{-1}A_0v$, so $V_A\cap L''=q^{-1}Z[q]v$ by [L4], and $\psi(L'')=qA_\infty v$, so $V_A\cap\psi(L'')=qA_\infty v\cap Av$. An element of $V_A\cap L''$ is $q^{-1}fv$ with $f\in\mathbb Z[q]$, and it lies in $qA_\infty v$ exactly when $q^{-2}f\in A_\infty$, i.e. when $f=0$ or $\deg f\le2$; hence $$E_{\mathbb Z}=V_A\cap L''\cap\psi(L'')=\mathbb Zq^{-1}v\oplus\mathbb Zv\oplus\mathbb Zqv,$$ the three Laurent monomials being exactly the integer-coefficient combinations with exponents between $-1$ and $1$. [L4]

2.1 **Witness (1): the lattice defects.** The vector $a=v+w$ is fixed by $\psi$, since $\psi(v)=v$, $\psi(w)=w$ and $\psi(q)=q^{-1}$ only acts on coefficients, and it lies in $L'$ with residue class $a+qL'$. But $a$ is a sum of two weight vectors of different weights, so $L'$ is not weight decomposed, and $\tilde e a=v\notin L'$ because $v=\beta t$ would require $\beta=1\notin qA_0$; thus $L'$ fails the crystal-lattice axioms of [L2] and the bar-fixed vector alone provides no parametrization or uniqueness. [L2, L3, step 1.1]

2.2 **Witness (2): the kernel and the two lifts.** Since $V_A\cap qL''=q(q^{-1}Z[q])v=\mathbb Z[q]v$, the canonical integral residue map $E_{\mathbb Z}\to(V_A\cap L'')/(V_A\cap qL'')=q^{-1}\mathbb Z[q]v/\mathbb Z[q]v$ is $(a_{-1}q^{-1}+a_0+a_1q)v\mapsto a_{-1}[q^{-1}v]$, which is onto with kernel $\mathbb Zv\oplus\mathbb Zqv\ne0$. The elements $g_1=(q+q^{-1})v$ and $g_2=(q+q^{-1})v+v=(q+q^{-1}+1)v$ both lie in $E_{\mathbb Z}$, both are fixed by $\psi$ because $\psi(q+q^{-1})=q+q^{-1}$ and $\psi(v)=v$, and both have residue class $q^{-1}v+qL''$; they are distinct since $g_2-g_1=v\ne0$. Hence the same nonzero crystal residue has two distinct bar-fixed integral lifts, and bar invariance plus congruence does not give uniqueness without the balanced isomorphism. [L1, step 1.2]

3.1 **Witness (2) is a genuine crystal lattice.** In the trivial module all Kashiwara operators vanish and $L''=q^{-1}A_0v$ is a full free $A_0$-lattice concentrated in the zero weight, with residue generator $q^{-1}v+qL''$; by [L2] it is a crystal lattice, so the failure of uniqueness in step 2.2 is not attributable to an invalid lattice. The genuine Kashiwara triples of [L5] require and possess the actual integral balanced map, which the present lattices do not have; accordingly no claim of the globalization theorem is contradicted. [L2, L5, step 2.2]

4.1 **Conclusion.** Steps 1.1–1.2 exhibit the nonbalanced lattice $L'$ whose bar-fixed vector $v+w$ cannot be globalized onto the residue class $qv+qL'$; steps 2.1–3.1 exhibit a valid crystal lattice with two distinct bar-fixed integral lifts of one nonzero crystal residue. Both conclusions are established by explicit coefficient computations in the displayed modules. [step 2.1, step 3.1, discharge-construct] ∎
