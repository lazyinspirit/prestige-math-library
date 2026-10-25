---
id: thm-s-unit-theorem
kind: theorem
title: S-unit theorem
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-axiom-of-choice
  - def-ideal-class-group-of-a-domain
  - def-prime-ideal-valuations-on-fractional-ideals
  - def-roots-of-unity-in-a-field
  - def-s-integers-and-s-units-of-a-number-field
  - lem-finite-support-of-ideal-valuations
  - lem-hall-malcev-integer-abelian-structure-and-rank
  - lem-ideal-class-group-well-defined
  - thm-dirichlet-unit-theorem
  - thm-finiteness-of-the-number-field-class-group
  - thm-lagrange
  - thm-principal-divisor-exact-sequence
  - thm-unique-factorisation-of-ideals-in-dedekind-domains
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "J. S. Milne, Algebraic Number Theory v3.08"
      url: "https://www.jmilne.org/math/CourseNotes/ANTc.pdf"
      locator: "Ch. 5 Thm. 5.11 p.90 (p_i^h=(pi_i); image of rank t)."
    - title: "Jurgen Neukirch, Algebraic Number Theory (Springer, 1999)"
      url: "https://web.math.ucsb.edu/~agboola/teaching/2021/fall/225A/neukirch.pdf"
      locator: "Cor. (11.7) p.71 (K_S = mu(K) x Z^{#S+r+s-1})."
    - title: "Jean-Francois Biasse and Christine Van Vredendaal, Fast multiquadratic S-unit computation"
      url: "https://msp.org/obs/2019/2-1/obs-v2-n1-p07-s.pdf"
      locator: "§2 p.106 (U_{K,S}=mu(K)x<eta_1>x...x<eta_{r+s}>)."
verification:
  audited: 2026-10-02
  precheck: pass
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $K$ be a number field
of signature $(r_1,r_2)$ and let $S$ be a finite set of nonzero prime ideals
of $\mathcal O_K$. Then
$\mathcal O_{K,S}^\times\cong\mu(K)\times\mathbb Z^{r_1+r_2-1+|S|}$; in
particular the $S$-unit group is finitely generated of rank
$r_1+r_2-1+|S|$ with torsion subgroup $\mu(K)$.

## Facts & Assumptions

**Given:** The Axiom of Choice, a number field $K$ of signature $(r_1,r_2)$, and a finite set $S$ of nonzero prime ideals of $\mathcal O_K$ with $G:=\mathcal O_{K,S}^\times$ ([[def-s-integers-and-s-units-of-a-number-field]]).

[F1] $G=\{x\in K^\times:v_{\mathfrak p}(x)=0$ for every nonzero prime $\mathfrak p\notin S\}$, where $v_{\mathfrak p}(x):=v_{\mathfrak p}((x))$ for the principal fractional ideal $(x)$; every $v_{\mathfrak p}(x)$ is an integer ([[def-s-integers-and-s-units-of-a-number-field]], [[def-prime-ideal-valuations-on-fractional-ideals]]).

[F2] The unit group satisfies $\mathcal O_K^\times\cong\mu(K)\times\mathbb Z^{r_1+r_2-1}$, is finitely generated of rank $r_1+r_2-1$, and has torsion subgroup $\mu(K)$ ([[thm-dirichlet-unit-theorem]]).

[F3] The ideal class group $\operatorname{Cl}(\mathcal O_K)$ is finite of order $h\ge1$, and the class of a nonzero fractional ideal is its image under $\operatorname{cl}$ ([[thm-finiteness-of-the-number-field-class-group]], [[def-ideal-class-group-of-a-domain]], [[lem-ideal-class-group-well-defined]]).

[F4] The principal-divisor sequence $0\to\mathcal O_K^\times\to K^\times\xrightarrow{\operatorname{div}}\operatorname{Div}(\mathcal O_K)\xrightarrow{\operatorname{cl}}\operatorname{Cl}(\mathcal O_K)\to0$ is exact, where $\operatorname{div}(x)=\sum_{\mathfrak p}v_{\mathfrak p}((x))[\mathfrak p]$; thus $\ker\operatorname{div}=\mathcal O_K^\times$ and the principal divisors are exactly the kernel of $\operatorname{cl}$ ([[thm-principal-divisor-exact-sequence]]).

[F5] Every nonzero fractional ideal has the unique factorisation $I=\prod_{\mathfrak p}\mathfrak p^{v_{\mathfrak p}(I)}$, and $v_{\mathfrak p}(IJ)=v_{\mathfrak p}(I)+v_{\mathfrak p}(J)$ ([[thm-unique-factorisation-of-ideals-in-dedekind-domains]], [[lem-finite-support-of-ideal-valuations]]); in particular $v_{\mathfrak p}(\mathfrak p)=1$ and $v_{\mathfrak q}(\mathfrak p)=0$ for $\mathfrak q\ne\mathfrak p$.

[F6] Every subgroup of $\mathbb Z^n$ is free of rank at most $n$, and a finitely generated abelian group has an intrinsic free rank and finite torsion subgroup ([[lem-hall-malcev-integer-abelian-structure-and-rank]]).

[F7] An element of $K^\times$ of finite order is a root of unity, and every root of unity in $K$ lies in $\mathcal O_K^\times$; thus $\mu(K)$ is exactly the torsion subgroup of $\mathcal O_K^\times$ and is finite ([[def-roots-of-unity-in-a-field]], [[thm-dirichlet-unit-theorem]]).

[F8] If $G$ is a finite group of order $h$, then $g^h=1$ for every $g\in G$ ([[thm-lagrange]]).



## Proof

**Proof technique:** measure an $S$-unit by its valuations at the primes in $S$. The kernel of that map is the ordinary unit group, and the image has finite index in $\mathbb Z^S$ because taking $h$-th powers of the prime ideals turns them principal; the image is therefore free of rank $|S|$, so the surjection onto it splits and exposes $G$ as $\mu(K)$ times a free abelian group of rank $r_1+r_2-1+|S|$.

1.1 Define $\varphi:G\to\mathbb Z^S$ by $\varphi(u)=(v_{\mathfrak p}(u))_{\mathfrak p\in S}$; it is a group homomorphism because $v_{\mathfrak p}(xy)=v_{\mathfrak p}(x)+v_{\mathfrak p}(y)$ for all nonzero fractional ideals. [F1, F5]

1.2 The kernel of $\varphi$ is $\mathcal O_K^\times$: a unit $u\in G$ has $\varphi(u)=0$ exactly when $v_{\mathfrak p}(u)=0$ for every $\mathfrak p\in S$, and by definition $v_{\mathfrak p}(u)=0$ for every $\mathfrak p\notin S$, so $\varphi(u)=0$ exactly when $\operatorname{div}(u)=0$, that is $u\in\ker\operatorname{div}=\mathcal O_K^\times$. [F1, F4]

1.3 Put $h:=|\operatorname{Cl}(\mathcal O_K)|\ge1$, a finite number; for $\mathfrak p\in S$ let $[\mathfrak p]$ be its class, so $[\mathfrak p]^h=1$ by [F8], and hence the divisor $h[\mathfrak p]$ lies in the kernel of $\operatorname{cl}$, i.e. is principal: there is $\pi_{\mathfrak p}\in K^\times$ with $(\pi_{\mathfrak p})=\mathfrak p^h$; since $\mathfrak p^h$ is an integral ideal, $\pi_{\mathfrak p}\in\mathcal O_K\setminus\{0\}$. [F3, F4, F8]

2.1 For $\mathfrak p,\mathfrak q\in S$ one has $v_{\mathfrak q}(\pi_{\mathfrak p})=v_{\mathfrak q}(\mathfrak p^h)=h\,v_{\mathfrak q}(\mathfrak p)=h\delta_{\mathfrak p\mathfrak q}$, using additivity of valuations and $v_{\mathfrak q}(\mathfrak p)=1$ for $\mathfrak q=\mathfrak p$ and $0$ otherwise. [F5, step 1.3]

3.1 Consequently $h\mathbb Z^S\subseteq\varphi(G)$, because $\varphi(\pi_{\mathfrak p})=h\,e_{\mathfrak p}$ for each $\mathfrak p\in S$ and the elements $h\,e_{\mathfrak p}$ generate $h\mathbb Z^S$. [step 1.1, step 2.1]

4.1 The image $M:=\varphi(G)$ is a subgroup of $\mathbb Z^S$, hence free of rank $s\le|S|$; since $h\mathbb Z^S$ is a subgroup of $M$ isomorphic to $\mathbb Z^{|S|}$, the same rank bound gives $|S|\le s$, so $s=|S|$ and $M\cong\mathbb Z^{|S|}$; also $M$ has finite index in $\mathbb Z^S$, because it contains $h\mathbb Z^S$. [F6, step 3.1]

5.1 Since $M$ is free abelian, the surjection $\varphi:G\twoheadrightarrow M$ splits: choose a $\mathbb Z$-basis $m_1,\dots,m_{|S|}$ of $M$ and preimages $u_1,\dots,u_{|S|}\in G$ with $\varphi(u_i)=m_i$, and define the homomorphism $\sigma:M\to G$ by $\sigma(m_i)=u_i$; then $\varphi\circ\sigma=\mathrm{id}_M$, and every $g\in G$ is written as $g=\sigma(\varphi(g))\cdot\bigl(g\,\sigma(\varphi(g))^{-1}\bigr)$ with $g\,\sigma(\varphi(g))^{-1}\in\ker\varphi$ and $\sigma(\varphi(g))\in\operatorname{im}\sigma$, while $\ker\varphi\cap\operatorname{im}\sigma=\{1\}$ because $\varphi(\sigma(m))=m$; hence $G\cong\ker\varphi\times M$. [step 1.2, step 4.1]

6.1 By [F2] and step 5.1, $G\cong\bigl(\mu(K)\times\mathbb Z^{r_1+r_2-1}\bigr)\times\mathbb Z^{|S|}\cong\mu(K)\times\mathbb Z^{r_1+r_2-1+|S|}$, so $G$ is finitely generated, its free rank is $r_1+r_2-1+|S|$, and the torsion subgroup of $G$ is the torsion subgroup of $\mu(K)\times\mathbb Z^{r_1+r_2-1+|S|}$, namely $\mu(K)$. [F2, step 5.1]

7.1 Directly: if $g\in G\subseteq K^\times$ has finite order then $g$ is a root of unity and so lies in $\mu(K)$; conversely every root of unity lies in $\mu(K)\subseteq\mathcal O_K^\times\subseteq G$; hence the torsion subgroup of $G$ is $\mu(K)$, finite, in agreement with step 6.1. [F2, F7, step 6.1]

8.1 Choice accounting: the unit theorem [F2], class-group finiteness input [F3], principal-divisor exact sequence [F4], and ideal-factorisation and valuation inputs [F5] assume AC. The selections performed here are finitely many (the elements $\pi_{\mathfrak p}$ for $\mathfrak p\in S$ and the lifts $u_i$ of a basis of $M$), so these selections need only finite choice; the splitting is noncanonical because it depends on those lifts. [F2, F3, F4, F5, step 1.3, step 5.1] ∎
