---
id: thm-herbrand-lower-numbering-quotient-formula
kind: theorem
title: "Lower ramification numbering under a Galois quotient"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 7
deps:
  - def-herbrand-function-and-upper-ramification-numbering
  - def-lower-ramification-groups-of-a-local-galois-extension
  - thm-local-ramification-groups-normal-and-terminate
  - thm-local-inertia-fixed-field-is-maximal-unramified-extension
  - lem-local-integers-of-finite-separable-local-extension-are-monogenic
  - def-local-field-valuation-ring-uniformizer-and-residue-field
  - def-finite-galois-extension-and-galois-group
  - def-fixed-field-of-an-automorphism-group
  - def-countable-choice
  - thm-finite-extension-local-degree-equals-ramification-index-times-residue-degree
  - thm-unique-extension-of-a-nonarchimedean-absolute-value
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "J. Neukirch, Algebraic Number Theory, Chapter II, Section 10, Propositions 10.5–10.6 and Herbrand Theorem 10.7"
      url: "https://web.math.ucsb.edu/~agboola/teaching/2021/fall/225A/neukirch.pdf"
    - title: "J. S. Milne, Algebraic Number Theory, version 3.08, Chapter VII, Section 'Ramification groups'"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
verification: {}
---

## Statement

Assume Countable Choice. Let $L/K$ be a finite Galois extension of
nonarchimedean local fields with finite residue fields, let $H\triangleleft
G=\operatorname{Gal}(L/K)$, and put $M=L^H$. For every real $s\ge-1$, the
image of the lower ramification group of $L/K$ in
$\operatorname{Gal}(M/K)=G/H$ is the lower ramification group of $M/K$ at
index $\varphi_{L/M}(s)$:
$$G_sH/H=G_{\varphi_{L/M}(s)}(M/K),$$
where $\varphi_{L/M}$ is the Herbrand function of the Galois extension
$L/M$.

## Statement references

[[def-herbrand-function-and-upper-ramification-numbering]]

[[lem-local-integers-of-finite-separable-local-extension-are-monogenic]]

[J. Neukirch, *Algebraic Number Theory*, Chapter II, Section 10, Propositions 10.5–10.6 and Theorem 10.7](https://web.math.ucsb.edu/~agboola/teaching/2021/fall/225A/neukirch.pdf)

[J. S. Milne, *Algebraic Number Theory*, Chapter VII, “Ramification groups”](https://www.jmilne.org/math/CourseNotes/ANT.pdf)

## Facts & Assumptions

**Given:** Countable Choice, the finite Galois extension $L/K$, the normal subgroup $H$, and $M=L^H$.

[A1] Countable Choice is used by the local monogeneity and inertia results below. ([[def-countable-choice]])

[F1] [[def-lower-ramification-groups-of-a-local-galois-extension]]: For an integer $i\ge0$, $G_i$ consists of automorphisms satisfying $v_L(\sigma x-x)\ge i+1$ for every $x\in\mathcal O_L$; $G_0$ is the inertia subgroup.

[F2] [[def-herbrand-function-and-upper-ramification-numbering]]: For a finite Galois local extension $E/F$, $G_t=G_{\lceil t\rceil}$ for $t>-1$ and $\varphi_{E/F}(u)=\int_0^u |G_t|/|G_0|\,dt$ for $u\ge0$, with $\varphi(u)=u$ on $[-1,0]$.

[F3] [[lem-local-integers-of-finite-separable-local-extension-are-monogenic]]: Under Countable Choice, for each finite separable local extension $E/F$ there is $z\in\mathcal O_E$ such that $\mathcal O_E=\mathcal O_F[z]$.

[F4] [[thm-local-inertia-fixed-field-is-maximal-unramified-extension]]: For a finite Galois local extension $E/F$, the inertia subgroup has order $e(E/F)$.

[F5] [[thm-finite-extension-local-degree-equals-ramification-index-times-residue-degree]]: For a finite local extension $E/F$, normalized valuations satisfy $v_E|_F=e(E/F)v_F$.

[F6] [[thm-local-ramification-groups-normal-and-terminate]]: Lower groups are finite, nested, and eventually trivial.

[F7] [[thm-unique-extension-of-a-nonarchimedean-absolute-value]]: A finite extension of a complete nonarchimedean field has a unique extended absolute value, preserved by every base-field embedding.


## Proof

**Given:** The data in the Statement, including Countable Choice.

1.1 Choose generators $\alpha\in\mathcal O_L$ and $y\in\mathcal O_M$ with $\mathcal O_L=\mathcal O_K[\alpha]$ and $\mathcal O_M=\mathcal O_K[y]$ by [F3]. For any automorphism $\tau$ of either extension, every element of its valuation ring is a polynomial in the chosen generator with coefficients fixed by $\tau$; factoring $\tau(z)^j-z^j$ by $\tau(z)-z$ shows that $i(\tau):=\min_{x\in\mathcal O}(v(\tau x-x))$ equals the valuation of the generator displacement. For $h\in H$, this gives $i_{L/M}(h)=i_{L/K}(h)$, since both minima use $\mathcal O_L$ and $v_L$. [A1, F3, given, choose, algebra]

2.1 Since $\mathcal O_L=\mathcal O_K[\alpha]$, we have $L=M(\alpha)$. For a nonidentity coset $\bar\sigma\in G/H$, choose a lift $\sigma\in G$ for which $m=i_{L/K}(\sigma)$ is maximal in that coset, and put $f(T)=\prod_{h\in H}(T-h\alpha)$. Automorphisms preserve the unique extended valuation by [F7], so $h(\alpha)\in\mathcal O_L$ and the coefficients of $f$ lie in $\mathcal O_L$. They are fixed by $H$, hence lie in $M$; the valuation scaling [F5] then puts them in $\mathcal O_M$. Thus $f(T)\in\mathcal O_M[T]$ is the minimal polynomial of $\alpha$ over $M$. Since $\mathcal O_M=\mathcal O_K[y]$, each coefficient $c$ of $f$ is a polynomial in $y$ over $\mathcal O_K$, so $\sigma(c)-c$ is divisible by $a:=\sigma(y)-y$ in $\mathcal O_L$. Applying $\sigma$ to coefficients of $f$ and evaluating at $\alpha$ therefore shows that $a$ divides $b:=\prod_{h\in H}(\sigma h(\alpha)-\alpha)$ in $\mathcal O_L$. [A1, F3, F5, F7, given, step 1.1, choose, algebra]

3.1 Write $y=q(\alpha)$ for some $q(T)\in\mathcal O_K[T]$, using $\mathcal O_L=\mathcal O_K[\alpha]$. The polynomial $q(T)-y$ is divisible by the monic minimal polynomial $f(T)$ in $\mathcal O_M[T]$; applying $\sigma$ to coefficients and evaluating at $\alpha$ gives $y-\sigma(y)=f^\sigma(\alpha)q_1(\alpha)$ for some $q_1\in\mathcal O_L$. Up to a sign, $f^\sigma(\alpha)=b$, so $b$ divides $a$. Together with step 2.1 this yields $(a)=(b)$ and, by [F5], $e(L/M)i_{M/K}(\bar\sigma)=\sum_{h\in H}i_{L/K}(\sigma h).$ [F3, F5, given, step 1.1, step 2.1, algebra]

4.1 For every $h\in H$, the ultrametric inequality gives $i_{L/K}(\sigma h)\ge\min(m,i_{L/K}(h))$. If $i(h)<m$, applying the same inequality to $h=\sigma^{-1}(\sigma h)$ gives the reverse bound; if $i(h)>m$, evaluate at an element attaining the minimum for $\sigma$ to get equality $i(\sigma h)=m$; if $i(h)=m$, maximality of $m$ among the lifts gives equality. Hence $i_{L/K}(\sigma h)=\min(i_{L/K}(h),m)$ for all $h$. [given, step 3.1, choose, algebra]

5.1 For any real $u\ge-1$, the lower-group definition [F1] and Herbrand definition [F2] imply $\varphi_{L/M}(u)=\frac{1}{e(L/M)}\sum_{h\in H}\min\{i_{L/M}(h),u+1\}-1.$ For $-1\le u\le0$, exactly the $|H_0|$ inertia elements contribute $u+1$, while the others have $i(h)=0$, so the right side is $u$. For $u\ge0$, the two sides are continuous and have equal slopes on every open interval between consecutive integers: the number of $h$ with $i_{L/M}(h)>u+1$, divided by $|H_0|=e(L/M)$, is $|H_{\lceil u\rceil}|/|H_0|$. Taking $u=m-1$, steps 3.1–3.1 and [F4] give $\varphi_{L/M}(m-1)=i_{M/K}(\bar\sigma)-1$. [A1, F1, F2, F4, step 1.1, step 3.1, step 4.1, algebra]

6.1 At $s=-1$, both real-indexed groups are the full Galois groups and the quotient equality is immediate. If $-1<s<0$, then $G_s=G_0$ and $(G/H)_{\varphi_{L/M}(s)}=(G/H)_0$, since the Herbrand function is the identity on $[-1,0]$. The projection maps $G_0$ into $(G/H)_0$ and has kernel $H_0=H\cap G_0$. By [F4], these three inertia groups have orders $e(L/K)$, $e(L/M)$, and $e(M/K)$; valuation scaling [F5] gives $e(L/K)=e(L/M)e(M/K)$. Thus the image has order $|(G/H)_0|$ and equals it. Now let $s\ge0$ and take a nonidentity coset with maximal-lift value $m$ from step 2.1. By the real-index convention [F2], a lift lies in $G_s$ exactly when $i_{L/K}(\tau)-1\ge\lceil s\rceil$, equivalently $m-1\ge s$. Strict increase of $\varphi_{L/M}$ and step 5.1 give this exactly when the integer $i_{M/K}(\bar\sigma)-1=\varphi_{L/M}(m-1)$ is at least $\lceil\varphi_{L/M}(s)\rceil$, which is the membership condition for $\bar\sigma$ in the target lower group. The identity coset belongs to both groups, proving the equality. [A1, F1, F2, F4, F5, step 2.1, step 5.1, given, algebra] ∎
