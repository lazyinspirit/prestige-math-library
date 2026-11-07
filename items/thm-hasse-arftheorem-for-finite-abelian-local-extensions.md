---
id: thm-hasse-arftheorem-for-finite-abelian-local-extensions
kind: theorem
title: "Hasse–Arf integrality for finite abelian local extensions"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 9
deps:
  - def-local-field-valuation-ring-uniformizer-and-residue-field
  - def-lower-ramification-groups-of-a-local-galois-extension
  - def-herbrand-function-and-upper-ramification-numbering
  - lem-sen-congruence-for-cyclic-p-power-local-extensions
  - thm-herbrand-lower-numbering-quotient-formula
  - thm-herbrand-function-is-transitive-in-galois-towers
  - def-countable-choice
  - lem-tame-character-and-graded-conjugation-for-local-ramification
  - lem-choice-free-finite-local-extension-isometry-degree-and-digits
  - thm-local-inertia-fixed-field-is-maximal-unramified-extension
  - thm-fundamental-theorem-of-finite-galois-theory
  - thm-fundamental-theorem-of-finite-abelian-groups-invariant-factor-form
justified_by: []
proof_strategy: direct
axiom_use: >-
  The direct local ramification quotient and monogeneity arguments in the
  cited Hasse–Arf proof use Countable Choice. This item does not assert a
  choice-free proof.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "I. B. Fesenko and S. V. Vostokov, Local Fields and Their Extensions, second edition, Chapter III §4.3"
      url: "https://ivanfesenko.org/wp-content/uploads/2021/10/vol.pdf"
    - title: "J. Neukirch, Algebraic Number Theory, Chapter V §6, Theorem 6.3"
      url: "https://www.math.toronto.edu/~ila/Neukirch_Algebraic_number_theory.pdf"
verification: {}
---

## Statement

Assume Countable Choice. Let $L/K$ be a finite abelian extension of
nonarchimedean local fields with finite residue fields, let
$G=\operatorname{Gal}(L/K)$, and use the lower and upper ramification
numberings determined by the normalized valuation. Every upper ramification
break of $G$ is an integer.

## Statement references

[[def-local-field-valuation-ring-uniformizer-and-residue-field]]

[[def-lower-ramification-groups-of-a-local-galois-extension]]

[[def-herbrand-function-and-upper-ramification-numbering]]

[[lem-sen-congruence-for-cyclic-p-power-local-extensions]]

[[thm-herbrand-lower-numbering-quotient-formula]]

[[thm-herbrand-function-is-transitive-in-galois-towers]]

[[def-countable-choice]]

[Fesenko and Vostokov, *Local Fields and Their Extensions*, Chapter III §4.3, printed pp. 91–94](https://ivanfesenko.org/wp-content/uploads/2021/10/vol.pdf)

[Neukirch, *Algebraic Number Theory*, Chapter V §6, Theorem 6.3, printed pp. 354–355](https://www.math.toronto.edu/~ila/Neukirch_Algebraic_number_theory.pdf)

## Facts & Assumptions

**Given:** The finite abelian local extension, normalized ramification numberings, and Countable Choice.

[F1] The literal lower displacement conditions give a decreasing filtration, with changes only at integer indices; $G_t=G_{\lceil t\rceil}$ for $t>-1$. The upper filtration is $G^v=G_{\psi(v)}$, where $\varphi(u)=\int_0^u |G_t|/|G_0|,dt$ for $u\ge0$ and $\psi=\varphi^{-1}$. [[def-lower-ramification-groups-of-a-local-galois-extension]] [[def-herbrand-function-and-upper-ramification-numbering]]

[F2] Under Countable Choice, lower quotient compatibility and Herbrand transitivity hold for every normal subgroup. [[thm-herbrand-lower-numbering-quotient-formula]] [[thm-herbrand-function-is-transitive-in-galois-towers]]

[F3] In each totally ramified cyclic $p$-power extension, Sen's proof step 5.1 proves the auxiliary consecutive-gap identity $p^j\mid(c_{p^{j-1}}-c_{p^j})$ for every $1\le j<m$, as well as the stated pair congruence. This full gap identity is proved directly there and does not rely on satisfying the narrower product condition in its Statement. No additional choice assumption is used. [[lem-sen-congruence-for-cyclic-p-power-local-extensions]]

[F4] In a totally ramified abelian extension of residue characteristic $p$, $G_1$ is a $p$-group, $G/G_1$ is cyclic of order $r$ prime to $p$, and every positive lower break is divisible by $r$. [[lem-tame-character-and-graded-conjugation-for-local-ramification]]

[F5] The inertia fixed field has the full residue field of $L$, so $L/L^{G_0}$ is totally ramified. Intermediate local fields, isometry, and degree $ef$ have the stated finite-residue scope. [[thm-local-inertia-fixed-field-is-maximal-unramified-extension]] [[lem-choice-free-finite-local-extension-isometry-degree-and-digits]]

[F6] Finite Galois subgroups and quotients correspond to intermediate fields. Every finite abelian group is a finite direct product of cyclic groups. [[thm-fundamental-theorem-of-finite-galois-theory]] [[thm-fundamental-theorem-of-finite-abelian-groups-invariant-factor-form]]

[A1] Countable Choice supplies precisely the hypotheses of the inertia and ramification quotient interfaces; no local reciprocity or norm-filtration theorem is assumed. [[def-countable-choice]]

## Proof

**Proof technique:** prove integrality in cyclic extensions by Sen congruences and tame conjugation, then detect each abelian break in a cyclic quotient.

**Given:** The data above.

1.1 We first justify termination for the given arbitrary finite Galois extension, directly from the displacement definition. Valuation isometry in [F5] shows that each $G_i$ is a subgroup: write $\sigma\tau x-x=\sigma(\tau x-x)+(\sigma x-x)$ for products and apply the same bound to inverses; $\mathcal O_L$ is preserved. Since $G$ is abelian these subgroups are normal. Take a finite $K$-basis of $L$ and multiply each basis element by a sufficiently large power of a uniformizer of $K$ to obtain a basis $e_1,\ldots,e_n$ contained in $\mathcal O_L$; the restriction of $v_L$ to $K^\times$ has a positive ramification factor, so these finitely many scalings exist. For every $\sigma\ne1$, take the least $j$ with $\sigma(e_j)\ne e_j$, which exists since a $K$-linear map fixing a basis is the identity. The finitely many numbers $v_L(\sigma(e_j)-e_j)$ are finite. Choose an integer $N\ge0$ at least their maximum (take $N=0$ if $G=1$). Membership in $G_N$ would require displacement valuation at least $N+1$ on every integral element, contradicting this integral witness for every nonidentity $\sigma$. Thus $G_N=1$, proving termination without invoking a basis outside $\mathcal O_L$. First let $L/K$ be cyclic and totally ramified. Write $|G|=rp^m$ with $p$ the residue characteristic and $p\nmid r$. By [F4], $P=G_1$ is the unique subgroup of order $p^m$ and $|G/P|=r$. If $m=0$, $G_t=1$ for every $t>0$, so the only possible break is $0$. Suppose $m>0$ and choose a generator $\rho$ of $P$. Put $E=L^P$. This is local and $L/E$ is totally ramified by [F5], since all intermediate residue fields equal $k_L$. For $0\le j<m$ write $c_j=v_L(\rho^{p^j}\varpi/\varpi-1)$. By the proof of [F3], $1\le c_0<\cdots<c_{m-1}$, and the displacement of any nonidentity element of $P$ is one plus the $c_j$ indexed by the $p$-valuation of its exponent. Thus the positive lower breaks of $G$ are exactly these $c_j$. Each is divisible by $r$ by [F4]. The consecutive-gap identity proved in [F3] gives $p^j\mid(c_j-c_{j-1})$ for $1\le j<m$. Since $p\nmid r$, it follows that $rp^j\mid(c_j-c_{j-1})$. [F1, F3, F4, F5, F6, given, algebra]

1.2 For any normal $N\triangleleft G$, put $M=L^N$. For $v\ge-1$ let $s=\psi_{L/K}(v)$. By [F2], the image of $G_s$ is $(G/N)_{\varphi_{L/M}(s)}$ and $\varphi_{L/K}(s)=\varphi_{M/K}(\varphi_{L/M}(s))=v$. Inverting the last equality gives $\varphi_{L/M}(s)=\psi_{M/K}(v)$. Hence $(G/N)^v=G^vN/N$ for every $v$, with the exact endpoint convention of [F1]. [A1, F1, F2, given, algebra]

2.1 For $0<t\le c_0$, the group $G_t$ is $P$ and the slope of $\varphi$ is $1/r$. For $c_{j-1}<t\le c_j$, $1\le j<m$, its order is $p^{m-j}$ and the slope is $1/(rp^j)$. Therefore each positive upper break is $\varphi(c_j)=c_0/r+\sum_{a=1}^j(c_a-c_{a-1})/(rp^a)$, an integer by step 1.1. A possible tame break at $0$ is integral as well. If a cyclic extension is not totally ramified, replace the base field by $L^{G_0}$. Its group is cyclic $G_0$ by [F5], and the lower groups for all $t\ge0$ are unchanged, because their definition uses the same valuation and ring $\mathcal O_L$. The Herbrand denominator is also the same $|G_0|$. Its nonnegative upper breaks are therefore identical and integral. The only possible remaining break is $-1$, the passage from the full group to inertia, which is integral. [F1, F4, F5, step 1.1, algebra]

3.1 Now let $G$ be finite abelian and let $u>0$ be an upper break. By finiteness of the filtration choose $\varepsilon>0$ so that $H=G^{u+\varepsilon}$ is constant for $u<v\le u+\varepsilon$ and is a proper subgroup of $G^u$. Choose $a\in G^u\setminus H$. The nonzero class of $a$ in the finite abelian group $G/H$ has nonzero coordinate in at least one of its cyclic factors by [F6]. Projection to this factor gives a cyclic quotient $G/N$, with $H\subseteq N$ and $a\notin N$. By step 1.2 its upper group at $u$ is nontrivial, while its upper groups at every $v$ with $u<v\le u+\varepsilon$ are trivial. Thus $u$ is an upper break of the cyclic local extension $L^N/K$. Step 2.1 proves $u$ integral. The only possible nonpositive breaks are $-1$ and $0$, and the trivial extension has no breaks. This proves the full assertion without any norm-filtration or reciprocity input. [F1, F6, step 2.1, step 1.2, algebra] ∎ 