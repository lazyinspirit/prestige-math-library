---
id: thm-lax-equivalence-for-common-banach-space-schemes
kind: theorem
title: "Lax equivalence for a common Banach-space scheme"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps: [def-common-space-linear-scheme-interface, thm-uniform-boundedness-principle, def-dependent-choice, def-natural-numbers, def-cartesian-product, def-axiom-schema-of-separation, def-axiom-schema-of-replacement]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Lloyd N. Trefethen, Finite Difference and Spectral Methods, Chapter 4, §4.2"
      url: "https://people.maths.ox.ac.uk/trefethen/4all.pdf"
    - title: "R. J. LeVeque, AMath 585–6 Notes, Chapter 12, §§12.1–12.5.1"
      url: "https://usermanual.wiki/Document/LeVequeFiniteDiff.545303893.pdf"
---

## Statement

Assume the Axiom of Dependent Choice ($\mathrm{DC}$). Let a common-space IVP
interface and bounded time-scheme family be given as in
[[def-common-space-linear-scheme-interface]]. If
the scheme is consistent on its dense invariant subspace, then it is
convergent on every finite time interval if and only if it is stable there,
with stability, consistency, and convergence all measured in the same norm
of $X$.

## Facts & Assumptions

**Given:** DC; a common-space scheme interface as in the statement; and consistency on its dense invariant subspace.

[F1] The common-space interface supplies a Banach space $X$, bounded linear steps $S_\nu$, positive time steps $\tau_\nu\to0$, a dense invariant consistency subspace $D$, a strongly continuous solution semigroup with $\sup_{0\le t\le T}\|U(t)\|_{\mathrm{op}}\le M_T$, and same-norm definitions of consistency, finite-time stability, and convergence ([[def-common-space-linear-scheme-interface]]).

[F2] For a set-family of bounded linear maps from a Banach space, pointwise boundedness implies a uniform operator-norm bound under DC ([[thm-uniform-boundedness-principle]]).

[F3] $\mathbb N\times\mathbb N$ is a set, subsets defined by a predicate are sets, and the image of a set under a uniquely specified assignment is a set ([[def-natural-numbers]], [[def-cartesian-product]], [[def-axiom-schema-of-separation]], [[def-axiom-schema-of-replacement]]).

[A1] DC is the dependent-choice axiom stated in [[def-dependent-choice]]; it is the explicit axiom assumed by [F2].

## Proof

1.1 Fix $T>0$ and suppose the family is stable, with a bound $C_T$ from [F1]. For $x\in D$, set $\eta_\nu(x,T):=\max_{\substack{r\in\mathbb N\\r\tau_\nu\le T}} \frac{\|(S_\nu-U(\tau_\nu))U(r\tau_\nu)x\|}{\tau_\nu}.$ Consistency says $\eta_\nu(x,T)\to0$ for each $x\in D$. [F1, given]

1.2 For each integer $n\ge0$, the finite telescoping identity is $S_\nu^n-U(n\tau_\nu)= \sum_{r=0}^{n-1}S_\nu^{n-1-r}(S_\nu-U(\tau_\nu))U(r\tau_\nu).$ For $n=0$ both sides are zero. For $n\ge1$, expand each summand as $S_\nu^{n-r}U(r\tau_\nu)-S_\nu^{n-1-r}U((r+1)\tau_\nu)$; adjacent terms cancel, leaving $S_\nu^n-U(n\tau_\nu)$. [F1, algebra]

1.3 Conversely, suppose the family is convergent. Fix $T>0$ and $x\in X$. By convergence, for all sufficiently large $\nu$, $\max_{n\tau_\nu\le T}\|S_\nu^nx-U(n\tau_\nu)x\|\le1.$ The finite-time solution bound in [F1] then gives $\max_{n\tau_\nu\le T}\|S_\nu^nx\|\le M_T\|x\|+1$ for those $\nu$. [F1, given]

2.1 If $x\in D$ and $n\tau_\nu\le T$, [F1], step 1.2, and the definition of $\eta_\nu$ yield $\|S_\nu^nx-U(n\tau_\nu)x\| \le C_T\sum_{r=0}^{n-1}\|(S_\nu-U(\tau_\nu))U(r\tau_\nu)x\| \le C_T n\tau_\nu\eta_\nu(x,T) \le C_TT\eta_\nu(x,T).$ The last quantity tends to zero independently of the allowed $n$. [F1, step 1.2, algebra]

2.2 Only finitely many indices $\nu$ were omitted in step 1.3. For each fixed omitted $\nu$, there are only finitely many integers $n$ with $n\tau_\nu\le T$, and each $S_\nu^n x$ is a vector of finite norm. Thus the powers are pointwise bounded on every $x\in X$. The admissible index set $I_T:=\{(\nu,n)\in\mathbb N\times\mathbb N:n\tau_\nu\le T\}$ exists by Separation; each pair determines a unique bounded linear operator $S_\nu^n$, so Replacement gives the set-family $\mathcal F_T:=\{S_\nu^n:(\nu,n)\in I_T\}$. For fixed $\nu$, boundedness supplies a finite $K_\nu\ge1$ with $\|S_\nu z\|\le K_\nu\|z\|$. The identity $S_\nu^0=I$ is linear with bound $1=K_\nu^0$; if $S_\nu^n$ is linear with bound $K_\nu^n$, then $S_\nu^{n+1}=S_\nu S_\nu^n$ is linear and $\|S_\nu^{n+1}z\|\le K_\nu\|S_\nu^nz\|\le K_\nu^{n+1}\|z\|$. Finite induction therefore proves every member of $\mathcal F_T$ bounded and linear. This argument fixes one $\nu$ at a time and chooses no sequence of bounds. Also $X$ is Banach by [F1]. [F1, F3, step 1.3, algebra]

3.1 Let $x\in X$ and $\varepsilon>0$. By density in [F1], choose $y\in D$ with $\|x-y\|<\varepsilon/[2(1+C_T+M_T)]$. For every $n\tau_\nu\le T$, $\|S_\nu^nx-U(n\tau_\nu)x\| \le (C_T+M_T)\|x-y\|+\|S_\nu^ny-U(n\tau_\nu)y\|.$ By step 2.1, the second term is below $\varepsilon/2$ for all such $n$ once $\nu$ is sufficiently large. This proves convergence for $x$, uniformly over the grid times in $[0,T]$. Since $x,T$ were arbitrary, stability implies convergence. [F1, step 2.1, choose, algebra]

4.1 Apply the uniform boundedness principle [F2] to $\mathcal F_T$, using the explicit DC assumption [A1]. It gives $\sup_{\substack{\nu,n\in\mathbb N\\n\tau_\nu\le T}} \|S_\nu^n\|_{\mathrm{op}}<\infty,$ which is stability on $[0,T]$. Since $T>0$ was arbitrary, convergence implies stability; together with step 3.1 this proves the equivalence. [F1, F2, A1, step 2.2, step 3.1] ∎
