---
id: lem-locally-finite-smooth-partition-of-unity-on-domain
kind: lemma
title: Locally finite smooth partitions of unity on domains
status: published
origin: pipeline
deps:
  - def-smooth-partition-of-unity-subordinate-to-an-open-cover
  - lem-smooth-bump-between-concentric-euclidean-balls
  - thm-heine-borel-rn
  - rem-complex-euclidean-space-dictionary
  - def-countable-choice
  - def-axiom-of-choice
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Mohammad Jabbari, Several Complex Variables course notes"
      url: https://www.cimat.mx/~mohammad.jabbari/course-SCV.pdf
      locator: "§4.1.1, compactly supported smooth localization; §4.1.3, partitions of unity used for the dbar problem."
    - title: "Jean-Pierre Demailly, Complex Analytic and Differential Geometry"
      url: https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf
      locator: "Ch. VIII §3, chartwise partitions and compactly supported localization; standard exhaustion-by-shells construction."
verification:
  audited: 2026-10-02
  precheck: pass
---

## Statement

Assume the Axiom of Choice (AC) and the Axiom of Countable Choice. Let
$\Omega\subseteq\mathbb C^n$, $n\ge1$, be a domain and let $(U_i)_{i\in I}$ be
an open cover of $\Omega$. Then there are an open cover $(V_k)_{k\in\mathbb N}$
of $\Omega$ refining $(U_i)$ and functions $\chi_k\in C^\infty(\Omega)$,
$k\in\mathbb N$, such that:

1. $(V_k)_{k\in\mathbb N}$ is locally finite and there is a map
$k\mapsto i(k)\in I$ with $V_k\subseteq U_{i(k)}$ for every $k$;
2. $0\le\chi_k\le 1$ and $\operatorname{supp}\chi_k\subseteq V_k$ for every $k$;
3. the family $(\operatorname{supp}\chi_k)_{k\in\mathbb N}$ is locally finite;
4. $\sum_{k}\chi_k=1$ at every point of $\Omega$.

In particular $(\chi_k)$ is a smooth partition of unity subordinate to the
locally finite refinement $(V_k)$.

## Facts & Assumptions

**Given:** The Axiom of Choice and the Axiom of Countable Choice; a domain $\Omega\subseteq\mathbb C^n$ with $n\ge1$; an open cover $(U_i)_{i\in I}$ of $\Omega$; the function $\delta(z):=\inf\{|z-w|:w\in\mathbb C^n\setminus\Omega\}$ on $\mathbb C^n$, read as $\delta\equiv+\infty$ when $\Omega=\mathbb C^n$.

[F1] A family $(\phi_i)_{i\in I}$ of smooth functions $\phi_i:M\to[0,1]$ is a smooth partition of unity subordinate to an open cover $(U_i)_{i\in I}$ of a smooth manifold $M$ when the supports are locally finite, $\operatorname{supp}(\phi_i)\subseteq U_i$ for every $i$, and $\sum_i\phi_i(p)=1$ for every $p$ ([[def-smooth-partition-of-unity-subordinate-to-an-open-cover]]).

[F2] For all $0<r<R$ there is a smooth function $\rho:\mathbb R^n\to[0,1]$ with $\rho=1$ on $\overline B_r(0)$ and $\operatorname{supp}\rho\subseteq B_R(0)$ ([[lem-smooth-bump-between-concentric-euclidean-balls]]).

[F3] A subset $K\subseteq\mathbb R^n$ is a compact subset of $(\mathbb R^n,d_2)$ if and only if $K$ is closed in $\mathbb R^n$ and bounded ([[thm-heine-borel-rn]]).

[F4] Under the coordinate identification of $\mathbb C^m$ with $\mathbb R^{2m}$ the metric, the balls, the open sets, the convergent sequences, the Cauchy sequences and the continuous maps of $\mathbb C^m$ are verbatim those of $\mathbb R^{2m}$ ([[rem-complex-euclidean-space-dictionary]]).

[F5] The Axiom of Countable Choice: for every family $(X_n)_{n\in\mathbb N}$ of nonempty sets there is $f$ with domain $\mathbb N$ and $f(n)\in X_n$ for all $n$ ([[def-countable-choice]]).

[F6] AC states that every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

**Choice use.** AC selects, for each point of the shells below, one cover member and one radius; the countable instance [F5] selects the finite subcover list of each shell and the bumps built on it. No other selection occurs: the shell functions $K_j$, $S_j$, $W_j$ and the normalisation are explicit.

## Proof

**Proof technique:** direct.

1.1 If $\Omega=\mathbb C^n$, then $\delta\equiv+\infty$ is constant. Otherwise $\mathbb C^n\setminus\Omega\ne\varnothing$, and for $z,z'\in\mathbb C^n$ and every $w\in\mathbb C^n\setminus\Omega$, $|z-w|\le|z-z'|+|z'-w|$, so taking infima and then interchanging $z,z'$ gives $|\delta(z)-\delta(z')|\le|z-z'|$. Thus $\delta$ is continuous in either case. For $j\ge1$ put $K_j:=\{z\in\Omega:|z|\le j\text{ and }\delta(z)\ge1/j\}$; then each $K_j$ is closed in $\mathbb C^n$ (intersection of the closed ball with the closed set $\{\delta\ge1/j\}$) and bounded, hence compact by [F3] read through [F4]; moreover $K_j\subseteq\operatorname{int}K_{j+1}$, because $|z|\le j<j+1$ and $\delta(z)\ge1/j>1/(j+1)$ hold for $z\in K_j$ and persist on a small ball around $z$ by continuity of the modulus and of $\delta$; finally $\bigcup_jK_j=\Omega$, since for $z\in\Omega$ one has $\delta(z)>0$ (or $\delta(z)=+\infty$) and $|z|<\infty$, so some integer $j$ satisfies $j\ge|z|$ and $1/j\le\delta(z)$. [F3, F4, algebra]

2.1 Put $K_m:=\varnothing$ for $m\le0$ and, for $j\ge1$, $S_j:=K_{j+1}\setminus\operatorname{int}K_{j-1}$ and $W_j:=\operatorname{int}K_{j+2}\setminus K_{j-2}$; then every $S_j$ is compact (a closed subset of the compact $K_{j+1}$), $S_j\subseteq W_j$ with $W_j$ open (because $K_{j+1}\subseteq\operatorname{int}K_{j+2}$ and $\operatorname{int}K_{j-1}\supseteq K_{j-2}$), and the $S_j$ cover $\Omega$: for $z\in\Omega$ let $m_0:=\min\{m:z\in K_m\}$, which exists by step 1.1, so $z\in K_{m_0}\subseteq K_{m_0+1}$ and $z\notin K_{m_0-1}\supseteq\operatorname{int}K_{m_0-1}$, that is $z\in S_{m_0}$. The family $(W_j)_{j\ge1}$ is locally finite: a neighbourhood of $z$ contained in $\operatorname{int}K_{m_0+1}$ misses every $W_j$ with $j\ge m_0+3$, while only finitely many smaller indices remain; thus the family is locally finite. [step 1.1, algebra]

3.1 For each $j\ge1$ the set of finite lists (including the empty list when $S_j=\varnothing$) $\bigl((z_1,r_1,i_1),\dots,(z_N,r_N,i_N)\bigr)$ with $z_k\in S_j$, $r_k>0$, $i_k\in I$, $\overline B(z_k,3r_k)\subseteq U_{i_k}\cap W_j$ and $S_j\subseteq\bigcup_kB(z_k,r_k)$ is nonempty: for every $z\in S_j\subseteq W_j$ the cover $\{U_i\}$ gives some $i(z)$ with $z\in U_{i(z)}$, the set $U_{i(z)}\cap W_j$ is open and contains $z$, so some radius $r(z)>0$ satisfies $\overline B(z,3r(z))\subseteq U_{i(z)}\cap W_j$ (choosing the pair $(i(z),r(z))$ by [F6]), and compactness of $S_j$ by step 2.1 lets the resulting open cover be reduced to a finite subcover; by [F5] select one such finite list for every $j\ge1$ and enumerate the union of the selected lists as a sequence $(B_k,i_k,r_k)_{k\in\mathbb N}$ of balls $B_k=B(z_k,r_k)$. Then $\bigcup_kB_k\supseteq\bigcup_jS_j=\Omega$ by step 2.1. [F5, F6, step 1.1, step 2.1]

4.1 For each $k$, [F2] applied with the pair $0<r=r_k<R=3r_k/2$ and the centre $z_k$ provides a smooth $\chi_k:\mathbb C^n\to[0,1]$ with $\chi_k=1$ on $\overline B(z_k,r_k)$ and $\operatorname{supp}\chi_k\subseteq B(z_k,3r_k/2)$; the balls here are Euclidean balls of $\mathbb R^{2n}$ under the identification of [F4], so $\chi_k\in C^\infty(\mathbb C^n)$. By step 3.1, $\operatorname{supp}\chi_k\subset B(z_k,2r_k)\subseteq U_{i_k}\cap W_{j(k)}$; the countably many choices of the $\chi_k$ are read through [F5]. Since only finitely many selected balls occur for each $W_j$, each support lies in its assigned $W_j$, and the family $(W_j)$ is locally finite by step 2.1, every point of $\Omega$ has a neighbourhood meeting only finitely many supports, so $\sigma:=\sum_k\chi_k$ is a well-defined smooth function on $\Omega$; finally $\sigma\ge1$ at every point of $\Omega$, because every point lies in some $S_j$ by step 2.1 and hence in some selected ball $B(z_k,r_k)$ on which $\chi_k=1$. [F2, F4, F5, step 2.1, step 3.1]

5.1 Define $V_k:=B(z_k,2r_k)\cap\Omega$, so each $V_k$ is open with $V_k\subseteq U_{i(k)}$ and with $\operatorname{supp}\chi_k\subseteq V_k$ by step 4.1, and put $\widetilde\chi_k:=\chi_k/\sigma$; then $\widetilde\chi_k\in C^\infty(\Omega)$, $0\le\widetilde\chi_k\le1$, $\operatorname{supp}\widetilde\chi_k=\operatorname{supp}\chi_k\subseteq V_k$, and $\sum_k\widetilde\chi_k=1$ because $\sum_k\chi_k=\sigma$. The family $(V_k)$ covers $\Omega$, because $\sum_k\widetilde\chi_k=1$ makes $\widetilde\chi_k$ positive at every point for at least one $k$, and then that point lies in $V_k$; it refines $(U_i)$ by the map $k\mapsto i_k$, and is locally finite because $V_k\subseteq W_{j(k)}$ and $(W_j)$ is locally finite by step 2.1; the supports of the $\widetilde\chi_k$ are locally finite for the same reason. Hence $(\widetilde\chi_k)$ is a smooth partition of unity subordinate to the locally finite refinement $(V_k)$ in the sense of [F1]. [F1, step 2.1, step 3.1, step 4.1] ∎
