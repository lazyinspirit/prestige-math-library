---
id: lem-cyclotomic-tate-twists-and-de-rham-invariants-under-choice
kind: lemma
title: Cyclotomic Tate twists and de Rham invariants under Choice
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 12
deps:
  - def-axiom-of-choice
  - thm-algebraic-embedding-extension
  - lem-choice-free-finite-ax-sen-approximation
  - lem-choice-free-finite-padic-different-and-base-change-calculus
  - lem-choice-free-de-rham-period-completion-is-a-discrete-valuation-ring
  - lem-choice-free-crystalline-logarithm-and-abstract-semistable-period-ring
  - lem-choice-free-algebraic-coefficients-and-logarithm-branch-in-de-rham-periods
  - prop-prime-power-cyclotomic-polynomials-and-the-eisenstein-translate
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

Assume AC. Let $F/\mathbb Q_p$ be a GIVEN algebraic closure with its valuation, $C=\widehat F$ its ordinary completion, $K\subset F$ finite over $\mathbb Q_p$, and suppose a compatible primitive system $(\zeta_{p^n})_{n\ge0}$ is GIVEN. Write $G_K=\operatorname{Aut}(F/K)$, let $\chi$ be its cyclotomic character, and give $C(i)$ the action $g(c)=\chi(g)^i g(c)$. Then $C^{G_K}=K$, $C(i)^{G_K}=0$ for every nonzero integer $i$, and $B_{\mathrm{dR}}^{G_K}=K$ for the given period construction. This lemma does not assert the crystalline or semistable invariant fields, regularity, or a choice-free version of these assertions.

## Facts & Assumptions

**Given:** AC, the actual valued algebraic closure, the finite extension $K/\mathbb Q_p$ inside it, and the compatible primitive cyclotomic system.

[A1] The Axiom of Choice is available for the indicated embedding extensions. [[def-axiom-of-choice]]

[F1] Under AC, an embedding into an algebraically closed field extends across an algebraic extension. [[thm-algebraic-embedding-extension]]

[F2] Finite subfields of $F$ are complete with isometric embeddings, and the finite Ax–Sen estimate bounds approximation by an absolute constant depending only on $p$. [[lem-choice-free-finite-ax-sen-approximation]]

[F3] Finite valuation rings are finite free; different transitivity, base-change monotonicity and the derivative formula hold. [[lem-choice-free-finite-padic-different-and-base-change-calculus]]

[F4] The de Rham plus ring is a complete DVR with residue $C$ and logarithmic uniformizer $t$. [[lem-choice-free-de-rham-period-completion-is-a-discrete-valuation-ring]]

[F5] The Galois action satisfies $g(t)=\chi(g)t$. [[lem-choice-free-crystalline-logarithm-and-abstract-semistable-period-ring]]

[F6] Prime-power cyclotomic polynomials satisfy the displayed geometric identity and the Eisenstein translate at $p$. [[prop-prime-power-cyclotomic-polynomials-and-the-eisenstein-translate]]

[F7] The algebraic closure $F$ has a canonical Galois-equivariant coefficient embedding into $B_{\mathrm{dR}}^+$. [[lem-choice-free-algebraic-coefficients-and-logarithm-branch-in-de-rham-periods]]

## Proof

**Proof technique:** combine finite Ax approximation with uniform normalized traces on the named cyclotomic tower, then use the de Rham filtration.

1.1 Put $F_n=\mathbb Q_p(\zeta_{p^n})$, $K_n=KF_n$, and $K_\infty=\bigcup_nK_n$. For $H=\operatorname{Aut}(F/K_\infty)$, $C^H$ is the closure $\widehat K_\infty$ inside $C$. One inclusion follows from continuity of the isometric action. For the other let $x\in C^H$, fix $\delta>0$, and choose one $a\in F$ with $|a-x|<\delta$. The minimal polynomial of $a$ over $K_\infty$ has finitely many coefficients, hence belongs to $K_N[X]$ for one $N$; it is irreducible over $K_N$ since it is irreducible over $K_\infty$. Each of its conjugates is obtained by a $K_\infty$-embedding of $K_\infty(a)$ into $F$; by [F1] this extends to an automorphism of $F$ fixing $K_\infty$, because its algebraically closed image contains $K_\infty$ and every element of $F$ is algebraic over it. All conjugates are therefore within $\delta$ of $a$. The finite Ax–Sen estimate over the finite field $K_N$ gives $b\in K_N$ with $|a-b|\le p^{p/(p-1)^2}\delta$. Since $\delta$ is arbitrary, $x$ is in the closure. No family of approximants is chosen simultaneously. [A1, F1, F2, given, construct, algebra]

1.2 By [F6], $F_n/\mathbb Q_p$ is totally ramified of degree $p^{n-1}(p-1)$, with uniformizer $\zeta_{p^n}-1$; the Eisenstein irreducibility is valid over $\mathbb Q_p$ by the same valuation argument. The derivative of $(1+T)^p-\zeta_{p^n}$ and [F3] give $D(F_{n+1}/F_n)=1$ once its degree is $p$ (including $p=2$ after the trivial initial stage). The integers $[K_n:F_n]$ decrease under base change and eventually stabilize, and the residue degrees of $K_n/\mathbb Q_p$ are nested and bounded by $[K:\mathbb Q_p]$, so they also stabilize. Therefore $[K_{n+1}:K_n]=p$ and each such step is totally ramified for all large $n$. With $D_n=D(K_n/F_n)$, the degree-preserving base-change inequality and different transitivity in [F3] give $D_{n+1}\le D_n$ and $D(K_{n+1}/K_n)=1+D_{n+1}-D_n$. [F2, F3, F6, given, algebra]

2.1 Fix a level $n_0$ after the preceding stabilization. For $n\ge m\ge n_0$, summing the different exponents gives $D(K_n/K_m)=n-m+D_n-D_m\ge n-m-D_{n_0}$ and $[K_n:K_m]=p^{n-m}$. If a finite DVR extension has ramification index $e$, integer-normalized different exponent $d$, and $x$ has integer valuation $j$, the trace-ideal exponent is $\lfloor(j+d)/e\rfloor$: by the codifferent definition, $\operatorname{Tr}(x\mathcal O_L)\subseteq\mathfrak p_K^r$ exactly when $x\mathcal O_L\subseteq\mathfrak p_K^r\mathfrak D^{-1}$. Since $\operatorname{Tr}(x)$ belongs to that ideal, this gives $v_p(\operatorname{Tr}_{K_n/K_m}x)\ge v_p(x)+D(K_n/K_m)-1$. Thus normalized traces $T_{n,m}=p^{m-n}\operatorname{Tr}_{K_n/K_m}$ have valuation loss at most $1+D_{n_0}$, uniformly in $m,n$. [F3, step 1.2, algebra]

3.1 Trace transitivity makes $T_m$ a well-defined projection $K_\infty\to K_m$, and step 2.1 extends it uniquely to a bounded projection $\widehat K_\infty\to K_m$. The operator bound is uniform in $m$, so $T_mx\to x$: this is eventual equality on the dense union and follows for all completion points by uniform continuity. Each trace is equivariant under $\operatorname{Gal}(K_\infty/K)$, and [F1] gives surjectivity of $G_K$ to each finite cyclotomic Galois group. If $x\in C(i)^{G_K}$ for $i\ne0$, step 1.1 puts $x\in\widehat K_\infty$, since $H$ acts trivially on the twist. For each $m$, choose one automorphism fixing $K_m$ with $\chi(g)^i\ne1$; arbitrarily high finite cyclotomic degrees and [F1] supply it. Then $T_mx=g(T_mx)=\chi(g)^{-i}T_mx$, so $T_mx=0$ for every $m$ and $x=0$. For $i=0$, each $T_mx$ is fixed by the finite group $\operatorname{Gal}(K_m/K)$ and lies in $K$, so $x\in K$ by completeness. [A1, F1, F2, step 1.1, step 2.1, construct, algebra]

4.1 By [F4]–[F5], the associated graded of $B_{\mathrm{dR}}$ is $C(i)$ in degree $i$. If a nonzero fixed element has nonzero valuation, its leading coefficient is a nonzero fixed vector of $C(i)$, contrary to step 3.1. If it has valuation zero, its residue lies in $K$ by step 3.1; subtracting the canonical algebraic coefficient embedding of this residue gives a fixed element of positive valuation, hence zero by the same argument. Therefore $B_{\mathrm{dR}}^{G_K}=K$. The coefficient embedding is the uniquely defined finite algebraic lifting in the period construction, and AC is used only for the full automorphism extensions in steps 1.1 and 3.1. [A1, F4, F5, F7, step 1.1, step 3.1, algebra] ∎

## Source notes

The relevant Fontaine–Ouyang Corollary 3.56 and its de Rham application were read from the cached full text. The local derivation here instead uses the explicitly proved finite Ax–Sen estimate and an explicit trace bound from finite differents. The Choice hypothesis is stated, not concealed; the original unqualified period-ring invariant theorem is not closed by this lemma.
