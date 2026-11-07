---
id: lem-choice-free-de-rham-invariants-iff-finite-galois-lifting
kind: lemma
title: De Rham invariants and finite Galois lifting without Choice
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 12
deps:
  - lem-choice-free-finite-ax-sen-approximation
  - lem-choice-free-finite-padic-different-and-base-change-calculus
  - lem-choice-free-de-rham-period-completion-is-a-discrete-valuation-ring
  - lem-choice-free-crystalline-logarithm-and-abstract-semistable-period-ring
  - lem-choice-free-algebraic-coefficients-and-logarithm-branch-in-de-rham-periods
  - prop-prime-power-cyclotomic-polynomials-and-the-eisenstein-translate
  - thm-artin-fixed-field-degree-theorem
  - thm-fundamental-theorem-of-finite-galois-theory
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Jean-Marc Fontaine and Yi Ouyang, Theory of p-adic Galois Representations
      url: https://www.imo.universite-paris-saclay.fr/~fontaine/galoisrep.pdf
      locator: Corollary 3.56 and Section 5.3; cyclotomic finite-different trace proof reconstructed locally
verification: {}
---

## Statement

Let $F/\mathbb Q_p$ be a GIVEN valued algebraic closure, $C=\widehat F$ its ordinary completion, and a compatible primitive cyclotomic system be GIVEN. Let $G_K=\operatorname{Aut}(F/K)$ and let $\chi$ be its cyclotomic character. The following are equivalent: (a) $B_{\mathrm{dR}}^{G_{\mathbb Q_p}}=\mathbb Q_p$; (b) restriction $G_{\mathbb Q_p}\to\operatorname{Gal}(L/\mathbb Q_p)$ is surjective for every finite Galois $L/\mathbb Q_p$ in $F$. If these conditions hold, then for every finite $K\subset F$, $C^{G_K}=K$, $C(i)^{G_K}=0$ for every nonzero integer $i$, and $B_{\mathrm{dR}}^{G_K}=K$. No Choice axiom is used to prove the equivalence, and neither condition is asserted unconditionally.

## Facts & Assumptions

**Given:** The valued algebraic closure, its completion, and the compatible primitive cyclotomic system.

[F2] Finite subfields of $F$ are complete with isometric embeddings, and the finite Ax–Sen estimate bounds approximation by an absolute constant depending only on $p$. [[lem-choice-free-finite-ax-sen-approximation]]

[F3] Finite valuation rings are finite free; different transitivity, base-change monotonicity and the derivative formula hold. [[lem-choice-free-finite-padic-different-and-base-change-calculus]]

[F4] The de Rham plus ring is a complete DVR with residue $C$ and logarithmic uniformizer $t$. [[lem-choice-free-de-rham-period-completion-is-a-discrete-valuation-ring]]

[F5] The Galois action satisfies $g(t)=\chi(g)t$. [[lem-choice-free-crystalline-logarithm-and-abstract-semistable-period-ring]]

[F6] Prime-power cyclotomic polynomials satisfy the displayed geometric identity and the Eisenstein translate at $p$. [[prop-prime-power-cyclotomic-polynomials-and-the-eisenstein-translate]]

[F7] The algebraic closure $F$ has a canonical Galois-equivariant coefficient embedding into $B_{\mathrm{dR}}^+$. [[lem-choice-free-algebraic-coefficients-and-logarithm-branch-in-de-rham-periods]]

[F8] For a finite automorphism group $H$ of a field $L$, $[L:L^H]=|H|$. [[thm-artin-fixed-field-degree-theorem]]

[F9] The finite Galois correspondence gives the finite group orders and restriction surjectivity for nested finite Galois extensions. [[thm-fundamental-theorem-of-finite-galois-theory]]

## Proof

**Proof technique:** combine finite Ax approximation with uniform normalized traces on the named cyclotomic tower, then use the de Rham filtration.

1.1 Assume condition (b) and fix $K$ finite over $\mathbb Q_p$. Put $F_m=\mathbb Q_p(\zeta_{p^m})$, $K_m=KF_m$, and $K_\infty=\bigcup_mK_m$. We first show every $x\in C(i)^{G_K}$ belongs to the closure $\widehat K_\infty$, for any integer $i$. The case $x=0$ is immediate. For one $m\ge1$ and $\delta>0$, choose one $a\in F$ with $|x-a|<\delta$ and let $L/\mathbb Q_p$ be a finite Galois field containing $K_m$ and the conjugates of $a$. Every $K_m$-conjugate $a'$ is $\sigma(a)$ for some $\sigma\in\operatorname{Gal}(L/K_m)$ by [F9], and condition (b) provides one lift $g\in G_{K_m}$. The twist invariance gives $g(x)=\chi(g)^{-i}x$, and $g$ fixes $\zeta_{p^m}$, so $|g(x)-x|\le p^{-m}|x|$. By isometry, $|a-a'|\le\max(\delta,p^{-m}|x|)$. The finite Ax–Sen estimate over $K_m$ supplies $b_m\in K_m$ within $p^{p/(p-1)^2}\max(\delta,p^{-m}|x|)$ of $a$. For any desired accuracy choose $m$ large and then $\delta$ small; this puts $x$ in $\widehat K_\infty$. Only one finite field, one conjugate and one lift at a time are used; no automorphism of the infinite cyclotomic tower is extended. [F2, F9, given, construct, algebra]

1.2 By [F6], $F_n/\mathbb Q_p$ is totally ramified of degree $p^{n-1}(p-1)$, with uniformizer $\zeta_{p^n}-1$; the Eisenstein irreducibility is valid over $\mathbb Q_p$ by the same valuation argument. The derivative of $(1+T)^p-\zeta_{p^n}$ and [F3] give $D(F_{n+1}/F_n)=1$ once its degree is $p$ (including $p=2$ after the trivial initial stage). The integers $[K_n:F_n]$ decrease under base change and eventually stabilize, and the residue degrees of $K_n/\mathbb Q_p$ are nested and bounded by $[K:\mathbb Q_p]$, so they also stabilize. Therefore $[K_{n+1}:K_n]=p$ and each such step is totally ramified for all large $n$. With $D_n=D(K_n/F_n)$, the degree-preserving base-change inequality and different transitivity in [F3] give $D_{n+1}\le D_n$ and $D(K_{n+1}/K_n)=1+D_{n+1}-D_n$. [F2, F3, F6, given, algebra]

2.1 Fix a level $n_0$ after the preceding stabilization. For $n\ge m\ge n_0$, summing the different exponents gives $D(K_n/K_m)=n-m+D_n-D_m\ge n-m-D_{n_0}$ and $[K_n:K_m]=p^{n-m}$. If a finite DVR extension has ramification index $e$, integer-normalized different exponent $d$, and $x$ has integer valuation $j$, the trace-ideal exponent is $\lfloor(j+d)/e\rfloor$: by the codifferent definition, $\operatorname{Tr}(x\mathcal O_L)\subseteq\mathfrak p_K^r$ exactly when $x\mathcal O_L\subseteq\mathfrak p_K^r\mathfrak D^{-1}$. Since $\operatorname{Tr}(x)$ belongs to that ideal, this gives $v_p(\operatorname{Tr}_{K_n/K_m}x)\ge v_p(x)+D(K_n/K_m)-1$. Thus normalized traces $T_{n,m}=p^{m-n}\operatorname{Tr}_{K_n/K_m}$ have valuation loss at most $1+D_{n_0}$, uniformly in $m,n$. [F3, step 1.2, algebra]

3.1 Trace transitivity makes $T_m$ a well-defined projection $K_\infty\to K_m$, and step 2.1 extends it uniquely to a bounded projection $\widehat K_\infty\to K_m$. The operator bound is uniform in $m$, so $T_mx\to x$: this is eventual equality on the dense union and follows for all completion points by uniform continuity. Each trace is equivariant under $\operatorname{Gal}(K_\infty/K)$. Condition (b) gives surjectivity from $G_K$ to each finite cyclotomic Galois group: take a finite Galois closure $L/\mathbb Q_p$ containing that level, use the finite Galois correspondence to extend the finite $K$-automorphism to $L$, and apply (b). By step 1.1, a twist-invariant $x$ lies in $\widehat K_\infty$. For $i\ne0$ and each $m$, arbitrarily high finite cyclotomic degrees give one finite automorphism fixing $K_m$ with $\chi(g)^i\ne1$; the same finite-lifting argument yields $g\in G_{K_m}$. Then $T_mx=g(T_mx)=\chi(g)^{-i}T_mx$, so $T_mx=0$ for every $m$ and $x=0$. For $i=0$, each $T_mx$ is fixed by $\operatorname{Gal}(K_m/K)$ and lies in $K$, so $x\in K$ by completeness. [F2, F9, step 1.1, step 2.1, given, construct, algebra]

4.1 By [F4]–[F5], the associated graded of $B_{\mathrm{dR}}$ is $C(i)$ in degree $i$. If a nonzero fixed element has nonzero valuation, its leading coefficient is a nonzero fixed vector of $C(i)$, contrary to step 3.1. If it has valuation zero, its residue lies in $K$ by step 3.1; subtracting the canonical algebraic coefficient embedding of this residue gives a fixed element of positive valuation, hence zero by the same argument. Therefore $B_{\mathrm{dR}}^{G_K}=K$. The coefficient embedding is the uniquely defined finite algebraic lifting in the period construction. [F4, F5, F7, step 1.1, step 3.1, algebra]

5.1 Conversely suppose condition (a). By the equivariant coefficient embedding [F7], every $a\in F^{G_{\mathbb Q_p}}$ lies in $\mathbb Q_p$. For any finite Galois $L/\mathbb Q_p$ inside $F$, let $H$ be the image of $G_{\mathbb Q_p}$ in its finite Galois group. Then $L^H=L\cap F^{G_{\mathbb Q_p}}=\mathbb Q_p$. By [F8], $|H|=[L:\mathbb Q_p]$, equal to the order of the full Galois group by [F9]. Thus $H$ is the full group, proving condition (b). [F7, F8, F9, given, algebra] ∎

## Source notes

The relevant Fontaine–Ouyang Corollary 3.56 and its de Rham application were read from the cached full text. The local derivation here instead uses the explicitly proved finite Ax–Sen estimate and an explicit trace bound from finite differents. The finite Galois lifting condition is explicit and is proved necessary as well as sufficient; no Choice axiom or infinite-tower automorphism extension is used. Neither equivalent condition is asserted unconditionally.
