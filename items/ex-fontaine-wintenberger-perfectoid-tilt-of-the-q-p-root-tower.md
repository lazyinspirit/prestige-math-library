---
id: ex-fontaine-wintenberger-perfectoid-tilt-of-the-q-p-root-tower
kind: example
title: "The completed p-power root tower over Q_p and its tilt"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 5
deps:
  - def-perfectoid-field-and-its-tilt
  - thm-perfectoid-field-tilt-is-perfectoid
  - def-field-of-p-adic-numbers
  - def-p-adic-absolute-value-on-the-rationals
  - thm-p-adic-completion-is-a-field
  - cor-zp-is-the-valuation-ring-of-qp
  - cor-maximal-ideal-and-residue-field-of-zp
  - def-extension-degree-and-finite-extension
  - def-dependent-choice
  - def-countable-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-unique-extension-of-a-nonarchimedean-absolute-value
  - thm-finite-extension-local-degree-equals-ramification-index-times-residue-degree
  - thm-completion-of-an-absolutely-valued-field
  - def-local-field-valuation-ring-uniformizer-and-residue-field
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Peter Scholze, Perfectoid Spaces, introduction and Lemma 3.4"
      url: "https://www.numdam.org/article/PMIHES_2012__116__245_0.pdf"
    - title: "Matthew Morrow, Adic and perfectoid spaces, §4.3"
      url: "https://www.imo.universite-paris-saclay.fr/~matthew.morrow/Perf%20spaces%20IMJ-PRG%20final.pdf"
verification: {}
---

## Example

Assume Dependent Choice. Fix a prime $p$, let $\mathbb Q_p$ have the normalization $|p|_p=p^{-1}$, and choose a compatible sequence $(\pi_n)_{n\ge0}$ in a fixed algebraic closure of $\mathbb Q_p$ with $\pi_0=p$ and $\pi_{n+1}^p=\pi_n$. Put $K_n=\mathbb Q_p(\pi_n)$, $K_\infty=\bigcup_{n\ge0}K_n$, and let $K$ be the completion of $K_\infty$ for the unique compatible absolute value. Then $K$ is a perfectoid field of residue characteristic $p$, with value group $|K^\times|=\{p^{-q}:q\in\mathbb Z[1/p]\}$ and residue field $\mathbb F_p$. Its tilt is isomorphic as a valued field to the completion
$$K^\flat\cong\widehat{\bigcup_{r\ge0}\mathbb F_p((t^{1/p^r}))},$$
where the absolute value is normalized by $|t|=|\pi_1|_K$; the element of $K^\flat$ whose sharp is $\pi_1$ corresponds to $t$.

## Example references

[Peter Scholze, *Perfectoid Spaces*, introduction and Lemma 3.4](https://www.numdam.org/article/PMIHES_2012__116__245_0.pdf)

[Matthew Morrow, *Adic and perfectoid spaces*, §4.3](https://www.imo.universite-paris-saclay.fr/~matthew.morrow/Perf%20spaces%20IMJ-PRG%20final.pdf)

## Facts & Assumptions

**Given:** Dependent Choice, a prime $p$, the normalized absolute value on $\mathbb Q_p$, and a fixed algebraic closure in which the chosen root sequence is constructed.

[A1] [[def-dependent-choice]]: Dependent Choice supplies an infinite sequence following a serial relation from a prescribed initial point.

[A2] [[def-countable-choice]]: Countable Choice selects one element from each member of a countable family of nonempty sets.

[F1] [[thm-choice-implies-dependent-implies-countable-choice]]: in ZF, Dependent Choice implies Countable Choice.

[F2] [[def-field-of-p-adic-numbers]]: $\mathbb Q_p$ is the metric completion of $\mathbb Q$ for the $p$-adic absolute value.

[F3] [[thm-p-adic-completion-is-a-field]]: the completion $\mathbb Q_p$ is a complete nonarchimedean valued field.

[F4] [[def-p-adic-absolute-value-on-the-rationals]]: $|p|_p=p^{-1}$.

[F5] [[cor-zp-is-the-valuation-ring-of-qp]]: $\mathbb Z_p=\{x\in\mathbb Q_p:|x|_p\le1\}$.

[F6] [[cor-maximal-ideal-and-residue-field-of-zp]]: the maximal ideal of $\mathbb Z_p$ is $p\mathbb Z_p$ and its residue field is $\mathbb F_p$.

[F7] [[def-local-field-valuation-ring-uniformizer-and-residue-field]]: a nonarchimedean local field is complete with discrete valuation, finite residue field, and a uniformizer generating its maximal ideal.

[F8] [[def-extension-degree-and-finite-extension]]: the degree of a finite field extension is its vector-space dimension.

[F9] [[thm-unique-extension-of-a-nonarchimedean-absolute-value]]: a finite extension of a complete nonarchimedean field has a unique extending absolute value and is complete for it.

[F10] [[thm-finite-extension-local-degree-equals-ramification-index-times-residue-degree]]: for a finite extension $L/\mathbb Q_p$, its degree equals the product of the value-group index and residue-field degree.

[F11] [[thm-completion-of-an-absolutely-valued-field]]: under Countable Choice, completion preserves the value group and residue field in the nonarchimedean case and the original field is dense in it.

[F12] [[def-perfectoid-field-and-its-tilt]]: a complete rank-one field of residue characteristic $p$ is perfectoid when its value group is nondiscrete and Frobenius on its valuation ring modulo $p$ is surjective.

[F13] [[thm-perfectoid-field-tilt-is-perfectoid]]: the tilt of a perfectoid field is the fraction field of its inverse-limit tilt ring; its valuation ring is that inverse limit and its value group agrees with the original one.

## Proof

**Given:** The data above.

1.1 For each $n$, the polynomial $X^p-\pi_n$ has a root in the fixed algebraic closure. The relation of extending a finite compatible root string by one root is serial, so Dependent Choice produces $(\pi_n)_{n\ge0}$ with $\pi_0=p$ and $\pi_{n+1}^p=\pi_n$. [A1, given, choose]

2.1 Let $d_n=[K_n:\mathbb Q_p]$, which is finite and at most $p^n$ because $\pi_n$ satisfies $X^{p^n}-p$. By [F1] and [A2], Countable Choice is available, so [F11] shows that the value group of $\mathbb Q_p$ is $p^{\mathbb Z}$; [F3]–[F6] give completeness, valuation ring $\mathbb Z_p$, and residue field $\mathbb F_p$. Since $|p|_p=p^{-1}$, $p$ is a uniformizer and $\mathbb Q_p$ is a nonarchimedean local field by [F7]. The unique extending absolute value is complete on $K_n$ by [F9], and $|\pi_n|^{p^n}=|p|_p=p^{-1}$, so the additive valuation $w_n=-\log_p|\cdot|$ has $w_n(\pi_n)=1/p^n$. The value-group index $e_n$ over $\mathbb Z$ is therefore at least $p^n$. The local-degree formula [F10] gives $d_n=e_nf_n$ with $f_n\ge1$. Thus $p^n\ge d_n=e_nf_n\ge e_n\ge p^n$, whence $d_n=e_n=p^n$ and $f_n=1$. Therefore $w_n(K_n^\times)=(1/p^n)\mathbb Z$ and the residue field of $K_n$ is $\mathbb F_p$. [A2, F1, F3, F4, F5, F6, F7, F8, F9, F10, F11, step 1.1, given, algebra]

3.1 The powers $1,\pi_n,\ldots,\pi_n^{p^n-1}$ form a $\mathbb Q_p$-basis by 2.1. For a nonzero sum $x=\sum_i a_i\pi_n^i$, the valuations $v_p(a_i)+i/p^n$ of its nonzero terms have distinct fractional parts, so the minimum is unique and equals $w_n(x)$. If $x$ is integral, each term has nonnegative valuation; since $v_p(a_i)\in\mathbb Z$ and $0\le i/p^n<1$, each $a_i\in\mathbb Z_p$. Conversely such coefficients give an integral element. Thus $\mathcal O_{K_n}=\mathbb Z_p[\pi_n]$. [F5, F8, step 2.1, given, algebra]

3.2 The unique absolute values on the nested finite extensions agree on overlaps, so they define a nonarchimedean absolute value on $K_\infty$. By [F1] the assumed Dependent Choice supplies the Countable Choice required by [F11]. Its completion $K$ is complete, has unchanged value group $\bigcup_n(1/p^n)\mathbb Z=\mathbb Z[1/p]$ in additive notation and unchanged residue field $\mathbb F_p$, and $K_\infty$ is dense in $K$. The subgroup $\mathbb Z[1/p]$ is nondiscrete. [A2, F1, F3, F6, F9, F11, step 2.1, given, algebra]

4.1 Let $x\in K^\circ$. Density gives $y\in\mathcal O_{K_n}$ for some $n$ with $|x-y|<|p|_p$. Write $y=\sum_{i=0}^{p^n-1}a_i\pi_n^i$ with $a_i\in\mathbb Z_p$ by 3.1, and put $z=\sum_i a_i\pi_{n+1}^i\in\mathcal O_{K_{n+1}}$. In the characteristic-$p$ quotient $K^\circ/pK^\circ$, the binomial theorem gives $z^p\equiv\sum_i a_i^p\pi_n^i\equiv y\pmod{pK^\circ}$, because all intermediate binomial coefficients are divisible by $p$ and $a_i^p\equiv a_i\pmod{p\mathbb Z_p}$. Also $x\equiv y\pmod{pK^\circ}$ since $|x-y|<|p|_p$. Thus Frobenius on $K^\circ/pK^\circ$ is surjective. [F5, F6, F11, step 3.1, step 3.2, given, algebra]

4.2 Choose $\varpi=\pi_1$, so $|p|_p<|\pi_1|<1$. The map $\mathcal O_{K_\infty}\to\mathcal O_K/\pi_1\mathcal O_K$ is surjective by density. If $y\in\mathcal O_{K_\infty}$ lies in $\pi_1\mathcal O_K$, then $y/\pi_1\in K_\infty$ and has norm at most $1$, so it lies in $\mathcal O_{K_\infty}$; thus the kernel is $\pi_1\mathcal O_{K_\infty}$. For $n\ge1$, 3.1 gives $\mathcal O_{K_n}/\pi_1\mathcal O_{K_n}\cong\mathbb F_p[X_n]/(X_n^{p^{n-1}}),$ where $X_n$ is the class of $\pi_n$ and $X_n=X_{n+1}^p$. Consequently, with $P=\mathbb F_p[u^{1/p^\infty}]=\bigcup_{r\ge0}\mathbb F_p[u^{1/p^r}]$ and $u$ corresponding to $\pi_1$, we have $K^\circ/\pi_1K^\circ\cong P/uP$. [F5, F6, step 3.1, step 3.2, given, algebra]

5.1 The field $K$ is complete by 3.2, has residue field $\mathbb F_p$, nondiscrete value group, and surjective Frobenius modulo $p$ by 4.1. Hence it is a perfectoid field of residue characteristic $p$. [F12, step 3.2, step 4.1, given]

6.1 Frobenius is an automorphism of $P$. The map $\widehat P\longrightarrow\varprojlim_F P/uP,\qquad f\longmapsto(f^{1/p^j}\bmod u)_{j\ge0},$ is defined first on $P$ and extends continuously to its $u$-adic completion; inverse Frobenius extends because dividing exponents by $p$ preserves convergence to exponent infinity. It is injective because a nonzero element has finite $u$-adic order, so some $p$-power root is not divisible by $u$. For surjectivity, take a compatible sequence $(x_j)$ and use the unique polynomial representative with exponents less than $1$ to lift each $x_j$ to $f_j\in P$. Then $f_{j+1}^p-f_j\in uP$, so $g_j=f_j^{p^j}$ satisfies $g_{j+1}-g_j\in u^{p^j}P$ and converges to some $g\in\widehat P$. For each fixed $k$, compatibility gives $f_j^{p^{j-k}}\equiv f_k\pmod u$ for $j\ge k$, so the $k$th coordinate of the image of $g$ is $x_k$. Since $K$ is perfectoid by 5.1, [F13] identifies its tilt integer ring with this Frobenius inverse limit, and 4.2 identifies the quotient with $P/uP$. Hence $K^{\flat\circ}\cong\widehat P$. [F13, step 4.2, step 5.1, given, construct, algebra]

7.1 The fraction field of $P$ is $\bigcup_{r\ge0}\mathbb F_p(u^{1/p^r})$. Each $\mathbb F_p((u^{1/p^r}))$ is the completion of its rational-function subfield, since Laurent series are limits of their finite truncations. Thus the completion of $\operatorname{Frac}(P)$ is the completion of $\bigcup_r\mathbb F_p((u^{1/p^r}))$. Since $P$ is dense in $\widehat P$, its fraction field is dense in $\operatorname{Frac}(\widehat P)$ by continuity of addition, multiplication, and inversion away from zero. Since $K$ is perfectoid by 5.1, [F13] says $K^\flat=\operatorname{Frac}(K^{\flat\circ})$ is complete; by 6.1 it is $\operatorname{Frac}(\widehat P)$. The element $u$ is represented by the compatible classes of $\pi_1,\pi_2,\ldots$ and its sharp is $\pi_1$. This proves the asserted valued-field description. [F13, step 5.1, step 6.1, given, algebra] ∎
