---
id: lem-etale-specialization-trait-through-a-specialization
kind: lemma
title: "A specialization is represented by a complete DVR trait"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - thm-existence-of-algebraic-closures
  - def-axiom-of-choice
  - lem-local-domain-dominated-by-valuation-overring
  - thm-krull-height-theorem
  - thm-lying-over
  - thm-equivalent-characterisations-of-a-dvr
  - thm-completion-of-a-noetherian-local-ring
  - thm-flatness-of-noetherian-completion
  - thm-krull-intersection-theorem
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Stacks Project, Algebra Lemmas 10.119.1, 10.119.9, 10.119.12, 10.119.13; Tags 00P8, 00PE, 00PG, 00PH"
      url: https://stacks.math.columbia.edu/tag/00PH
    - title: "Stacks Project, Fundamental Groups of Schemes, section 16 (0BUP), Lemma 16.4 (0C0N)"
      url: https://stacks.math.columbia.edu/download/pione.pdf
---

## Statement

Assume AC. Let $S$ be locally Noetherian and $s_0\in\overline{\{s_1\}}$. There is a morphism $\operatorname{Spec}R\to S$, with $R$ a Noetherian DVR, carrying its generic point to $s_1$ and its closed point to $s_0$. Replacing $R$ by its completion preserves these two images. One can also arrange that the complete DVR has algebraically closed residue field, allowing extension of both residue and fraction fields. If $s_0=s_1$, a constant trait suffices.

This is a new local support item for A911. The assertion concerns the selected specialization of underlying points. Identification with particular geometric points and paths is additional data, handled by the geometric field and basepoint support items; no independence of that data is asserted.

## Facts & Assumptions

**Given:** AC, $S$, and the selected pair $s_1,s_0$.

[F1] A local domain admits a dominating valuation overring under AC ([[lem-local-domain-dominated-by-valuation-overring]], [[def-axiom-of-choice]]). Algebraic closures exist under AC ([[thm-existence-of-algebraic-closures]]).

[F2] A prime minimal over a nonzero principal ideal in a Noetherian domain has height one; integral extensions satisfy lying over ([[thm-krull-height-theorem]], [[thm-lying-over]]).

[F3] A normal one-dimensional Noetherian local domain is a DVR ([[thm-equivalent-characterisations-of-a-dvr]]).

[F4] Noetherian local completion is local, Noetherian and faithfully flat, preserves the residue field, and is separated. Krull intersection gives injectivity for a local domain ([[thm-completion-of-a-noetherian-local-ring]], [[thm-flatness-of-noetherian-completion]], [[thm-krull-intersection-theorem]]).

## Proof

1.1 Choose a Noetherian affine neighbourhood $\operatorname{Spec}A$ of $s_0$. It contains $s_1$, since an open set contains every generalization of each of its points. Write their primes as $\mathfrak p\subseteq\mathfrak q$ and set $B=(A/\mathfrak p)_{\mathfrak q/\mathfrak p}$. This is a local Noetherian domain whose generic and closed points map to $s_1,s_0$. If they coincide, take $R=\kappa(s_0)\llbracket t\rrbracket$ and the constant map. Otherwise $B$ is not a field. Let $V$ be a valuation ring of $\operatorname{Frac}B$ dominating $B$, by [F1]. For generators $a_1,\ldots,a_r$ of its maximal ideal choose $a_r$ of smallest valuation. Then $C=B[a_1/a_r,\ldots,a_{r-1}/a_r]\subset V$ is Noetherian and $\mathfrak m_BC=a_rC$ is proper. A prime $\mathfrak n$ minimal over it has height one by [F2] and contracts to $\mathfrak m_B$. Thus $D=C_{\mathfrak n}$ is a one-dimensional Noetherian local domain dominating $B$, with the same fraction field. [F1, F2, given, choose, construct]

2.1 We give the needed normalization argument even when $D$ is not excellent. Put $F=\operatorname{Frac}D$ and let $M\subset F$ be any $D$-submodule. For $0\ne x\in\mathfrak m_D$, put $\ell=\operatorname{length}_D(D/xD)<\infty$; finiteness follows since its only prime is maximal and the quotient is Noetherian of dimension zero. If $N\subset F$ is nonzero and finite over $D$, clear denominators so $N\subset D$. The torsion finite module $D/N$ has finite length and is killed by some power $x^c$, so $x^cD\subset N\subset D$. Since multiplication by $x$ is injective, $\operatorname{length}(N/x^nN)=n\operatorname{length}(N/xN)$. For $n\ge c$ the inclusions imply $x^{n+c}D\subset x^nN\subset N\subset D$ and $x^nN\subset x^cD\subset N$, giving $(n-c)\ell\le\operatorname{length}(N/x^nN)\le(n+c)\ell$. Divide by $n$ and let $n$ increase to obtain $\operatorname{length}(N/xN)=\ell$. Any finite strict chain in $M/xM$ can be witnessed by finitely many elements of $M$; the submodule $N$ they generate has a chain at least as long in $N/xN$. Thus $\operatorname{length}(M/xM)\le\ell$. [step 1.1, algebra]

3.1 Let $E$ be the integral closure of $D$ in $F$. For a nonzero ideal $I\subset E$, a nonzero $y\in I$ can be written $a/b$ with $a,b\in D$ nonzero; hence $0\ne a=by\in I\cap D$. Step 2.1 with $M=E$ says $E/aE$ has finite length (the unit case gives zero). Therefore $I/aE$ is finite over $D$, and lifts of its generators together with $a$ generate $I$ over $E$. Every ideal of $E$ is finite, so $E$ is Noetherian. By lying over choose a prime $\mathfrak r$ over $\mathfrak m_D$. Its height is one: after inverting $D\setminus\{0\}$ the integral closure is $F$, so the only prime contracting to zero is zero; primes above the maximal ideal cannot be strictly comparable, since localizing and then quotienting by the lower prime gives an integral algebraic domain over a field, hence a field. Thus $R=E_{\mathfrak r}$ is normal local Noetherian of dimension one and is a DVR by [F3]. Its local inclusion $B\subset R\subset F$ gives the required two point images. [F2, F3, step 1.1, step 2.1, choose, construct]

4.1 Let $\pi$ be a uniformizer of $R$. By [F4], $\widehat R$ is Noetherian local with maximal ideal $(\pi)$ and the same residue field; flatness makes $\pi$ a nonzerodivisor. Each nonzero element lies in a largest power $(\pi^n)$, because the completion is separated, and is $\pi^n$ times a unit. Products of two such elements are nonzero, so $\widehat R$ is a domain, and this description is the DVR property. The map $R\to\widehat R$ is injective by [F4]; its generic point contracts to zero and its closed point to $(\pi)$. Both images in $S$ are therefore unchanged. [F4, step 3.1, algebra]

5.1 To make the residue field algebraically closed, fix an algebraic closure $\overline k$ of $k=R/(\pi)$ and well order its elements, using AC. At a successor stage, given a DVR $T$ with uniformizer $\pi$ and residue subfield $k_T\subset\overline k$, take the monic minimal polynomial of the next element over $k_T$, lift its coefficients to $T$, and form $T'=T[z]/(P)$. This is finite free over $T$, and its reduction modulo $\pi$ is the required residue field extension. Every maximal ideal lies over $(\pi)$, so $T'$ is local with maximal ideal $(\pi)$. It is Noetherian; $\pi$ is a nonzerodivisor by freeness and the $\pi$-adic intersection is zero by Krull intersection. As in step 4.1 every nonzero element is a unit times a power of $\pi$, proving that $T'$ is a DVR and that $T\to T'$ is injective. At limit stages take unions. Every nonzero element is still a unit times a power of the same $\pi$, and every nonzero ideal has an element of minimal exponent, so is principal. The union is therefore a Noetherian DVR with residue field $\overline k$. Its completion is again a DVR by step 4.1, with residue field $\overline k$. All extensions are local and injective, preserving the point images. AC is used for the valuation overring, algebraic closure and the transfinite choices, and is inherited from the listed suppliers. [F1, F4, step 4.1, choose, construct] ∎
