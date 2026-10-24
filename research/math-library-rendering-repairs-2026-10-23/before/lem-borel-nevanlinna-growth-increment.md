---
id: lem-borel-nevanlinna-growth-increment
kind: lemma
title: "Finite-measure growth increment lemma"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-nevanlinna-exceptional-radius-notation
  - thm-rational-functions-characterized-by-logarithmic-characteristic
  - thm-ahlfors-shimizu-characteristic-identity
  - thm-lebesgue-measure-is-a-complete-measure
  - def-countable-choice
  - thm-finite-and-countable-subadditivity-of-measures
  - thm-p-series-real-exponents
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Alexandre Eremenko, Lectures on Nevanlinna Theory, §§4–6"
      url: "https://www.math.purdue.edu/~eremenko/dvi/weizmann.pdf"
      locator: "§5, printed pp. 11–12: the finite-measure increment estimate and its use in the logarithmic-derivative lemma"
    - title: "Goldberg–Ostrovskii, Value Distribution of Meromorphic Functions"
      url: "https://www.math.purdue.edu/~eremenko/dvi/GOmainfile.pdf"
      locator: "Ch. 3 §1, Theorem 1.2 and its proof, printed pp. 89–91; use in Theorem 1.3, printed pp. 91–92"
verification:
  audited: 2026-10-02
---

## Statement

Assume Countable Choice. Let $u:[r_0,\infty)\to[1,\infty)$ be continuous,
nondecreasing and unbounded, and let $\varepsilon>0$. Then there is a Lebesgue
measurable set $E\subseteq[r_0,\infty)$ of finite linear measure such that for
every $r\in[r_0,\infty)\setminus E$
$$ u\bigl(r+u(r)^{-1-\varepsilon}\bigr)<u(r)+1. $$
In particular the lemma applies to $u(r)=T(r,f)$ for a nonconstant meromorphic
$f$ after increasing $r_0$ so that $T(r,f)>1$ there.

## Facts & Assumptions

**Given:** A continuous, nondecreasing, unbounded $u:[r_0,\infty)\to[1,\infty)$ and $\varepsilon>0$; Countable Choice is assumed.

[F1] Under Countable Choice, the Lebesgue measurable sets of $\mathbb R$ form a $\sigma$-algebra, Lebesgue measure is complete, and every elementary set (a finite union of half-open intervals) is Lebesgue measurable of the expected length ([[def-nevanlinna-exceptional-radius-notation]], [[thm-lebesgue-measure-is-a-complete-measure]]).

[F2] Lebesgue measure is countably subadditive on measurable sets: if $E_1,E_2,\dots$ are measurable with measurable union, then $\lambda\bigl(\bigcup_jE_j\bigr)\le\sum_j\lambda(E_j)$ ([[thm-finite-and-countable-subadditivity-of-measures]]).

[F3] For every real exponent $p>1$ the series $\sum_{m\ge1}m^{-p}$ converges ([[thm-p-series-real-exponents]]).

[F4] Ahlfors–Shimizu: $T(r,f)=T_{\rm AS}(r,f)+C_\infty(f)$, where $T_{\rm AS}$ is finite and nondecreasing and is convex as a function of $\log r$; hence $T(\cdot,f)$ is continuous and nondecreasing, and $T(r,f)>1$ for all sufficiently large $r$ ([[thm-ahlfors-shimizu-characteristic-identity]], [[def-nevanlinna-exceptional-radius-notation]]).

[F5] $f$ is rational if and only if $T(r,f)=O(\log r)$; for rational $f$ of degree $d\ge1$, $T(r,f)=d\log r+O(1)$ ([[thm-rational-functions-characterized-by-logarithmic-characteristic]]).

## Proof

**Proof technique:** split the failure set according to the integer level of $u$; the first crossing radii $s_m$ of the levels $m$ give an explicit cover of the failure set by intervals of lengths $m^{-1-\varepsilon}$, whose total length is a convergent series.

1.1 For every integer $m\ge1$ the superlevel set $\{r\ge r_0:u(r)\ge m\}$ is closed in $[r_0,\infty)$, and it is nonempty for $m\le\lim_{r\to\infty}u(r)=\infty$; let $s_m$ be its least element, and put $m_0:=\lceil u(r_0)\rceil$. Then $s_m\le s_{m+1}$. [F1, given, choose]

1.2 (Failure set) Put $\varphi(t):=t^{-1-\varepsilon}$ and $F:=\{r\ge r_0:u(r+\varphi(u(r)))\ge u(r)+1\}$. The function $r\mapsto u(r+\varphi(u(r)))-u(r)-1$ is continuous on $[r_0,\infty)$ because $u$ and $\varphi$ are continuous; hence $F$ is closed in $[r_0,\infty)$. [given, algebra]

1.3 (Application to $T$) Let $f$ be a nonconstant meromorphic function. By [F4] the function $T(\cdot,f)$ is continuous and nondecreasing in $r$ (the constant $C_\infty(f)$ is additive). It is also unbounded: $T$ has a limit because it is nondecreasing, and if that limit were finite then $T(r,f)=O(\log r)$ for large $r$; [F5] would then make $f$ rational of some degree $d\ge1$, and the same item gives $T(r,f)=d\log r+O(1)\to\infty$, a contradiction, while constant $f$ is excluded. Increasing $r_0$ so that $T(r_0,f)\ge1$, the lemma applies to $u=T(\cdot,f)$. [F4, F5, given]

2.1 (Measurability and finite measure of the cover) Every bounded closed interval $[a,b]$ is a countable intersection of half-open intervals $(a-1/n,b]$, hence Lebesgue measurable by [F1]; the same intervals cover it with measures tending to $b-a$, so $\lambda([a,b])\le b-a$. Set $$E:=[r_0,\infty)\cap\left([r_0,s_{m_0}]\cup\bigcup_{m\ge m_0}[s_{m+1}-m^{-1-\varepsilon},s_{m+1}]\right).$$ This set is measurable, is contained in $[r_0,\infty)$, and by [F2] $$ \lambda(E)\le s_{m_0}-r_0+\sum_{m\ge m_0}m^{-1-\varepsilon}<\infty $$ by [F3] and $\varepsilon>0$. [F1, F2, F3, step 1.1, algebra]

2.2 If $m>u(r_0)$ then $s_m>r_0$ and $u(s_m)=m$: by definition $u(s_m)\ge m$, and if $u(s_m)>m$ then by continuity $u>m$ on a left neighbourhood of $s_m$ inside $[r_0,\infty)$, contradicting minimality. If $m=u(r_0)$ the same holds with $s_m=r_0$. [given, step 1.1, algebra]

3.1 (Cover of the failure set) Recall $m_0=\lceil u(r_0)\rceil$ from step 1.1 and let $r\in F$ with $r\ge s_{m_0}$. Write $m:=\lfloor u(r)\rfloor\ge m_0$. Then $u(r)\in[m,m+1)$, so $r\ge s_m$ and $r<s_{m+1}$. Moreover $u(r)\ge m$, so by step 2.2, $u\bigl(r+\varphi(u(r))\bigr)\ge u(r)+1\ge m+1=u(s_{m+1})$; monotonicity of $u$ then forces $r+\varphi(u(r))\ge s_{m+1}$, i.e. $r\ge s_{m+1}-\varphi(u(r))\ge s_{m+1}-\varphi(m)$. Hence $$ F\cap[s_{m_0},\infty)\subseteq\bigcup_{m\ge m_0}\bigl[s_{m+1}-m^{-1-\varepsilon},\,s_{m+1}\bigr]\cup[r_0,s_{m_0}]. $$ [given, step 2.2, step 1.2, step 1.1, algebra]

4.1 (Conclusion off $E$) If $r\ge r_0$ and $r\notin E$, then $r\notin[r_0,s_{m_0}]$, so $r>s_{m_0}$; since $r$ lies in no interval $[s_{m+1}-m^{-1-\varepsilon},s_{m+1}]$ with $m\ge m_0$ either, step 3.1 gives $r\notin F$: unwinding the definition of $F$, $u(r+\varphi(u(r)))<u(r)+1$, as required. [step 3.1, step 2.1, algebra]

5.1 The argument selects nothing: each $s_m$ is the least element of a nonempty closed set, and the covering intervals are defined from the $s_m$ and the given constants. Countable Choice is used only through the published Lebesgue measure interface of [F1]. [F1, given] ∎
