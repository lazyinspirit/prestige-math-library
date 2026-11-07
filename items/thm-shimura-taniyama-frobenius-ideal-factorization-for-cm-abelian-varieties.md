---
id: thm-shimura-taniyama-frobenius-ideal-factorization-for-cm-abelian-varieties
kind: theorem
title: "Shimura–Taniyama Frobenius ideal factorization for CM abelian varieties"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 5
deps:
  - def-complex-abelian-variety-with-cm-type
  - def-global-field
  - def-place-of-a-global-field
  - thm-number-field-places-classification
  - def-good-reduction-and-abelian-scheme-model
  - def-arith-tate-module-and-inertia
  - lem-arith-field-prime-to-characteristic-torsion-and-tate-module
  - def-ring-of-integers-of-a-number-field
  - def-fractional-ideal-norm-number-field
  - lem-good-reduction-specialization-injective-on-abelian-variety-endomorphisms
  - lem-cm-centralizer-in-good-reduction-is-the-cm-algebra
  - lem-cm-endomorphism-degree-is-field-norm
  - lem-cm-type-tangent-character-eigenspaces-at-unramified-prime
  - lem-q-power-frobenius-degree-on-abelian-variety
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-finiteness-of-the-number-field-class-group
  - thm-lagrange
  - thm-number-field-integral-ideal-factorisation-in-zf
  - thm-principal-ideal-norm-is-absolute-field-norm
  - cor-norm-of-a-prime-ideal
  - cor-strong-nullstellensatz-two-inclusions
  - thm-tower-law-for-finite-field-extensions
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, The Fundamental Theorem of Complex Multiplication"
      url: "https://arxiv.org/pdf/0705.3446"
      locator: "Theorem 2.1 and its complete proof, printed pp. 16–18."
    - title: "J. S. Milne, Complex Multiplication, Chapter II §8"
      url: "https://www.jmilne.org/math/CourseNotes/CM.pdf"
      locator: "The Shimura–Taniyama formula, printed pp. 62–69."
verification: {}
---

## Statement

Assume the Axiom of Choice. Let $A$ be a $g$-dimensional abelian variety over a number field $k$, with a CM algebra $E$ of degree $2g$ acting by endomorphisms defined over $k$, and CM type $\Phi\subset\operatorname{Hom}_{\mathbb Q}(E,k)$. Here $O_E$ is the product of the rings of integers of the field factors of $E$, and $\operatorname{End}(A_{\bar k})$ denotes geometric endomorphisms. Assume that $k$ contains all conjugates of $E$, that $\operatorname{End}(A_{\bar k})\cap E=O_E$, and that $A$ has good reduction at a finite place $P$ of $k$. Let $p=P\cap\mathbb Z$ be unramified in every factor of $E$ and let $q=|O_k/P|$. Then the $q$-power Frobenius endomorphism of the special fibre is induced by an element $\pi\in O_E$, and its principal ideal factors as
$$
(\pi)=\prod_{\varphi\in\Phi}\varphi^{-1}\!\left(N_{k/\varphi E}(P)\right).
$$
For a prime ideal $P$ of $O_k$ and a field factor $K=\varphi E_j\subset k$, $N_{k/K}(P)=(P\cap O_K)^{f(P/(P\cap O_K))}$, where $f(P/\mathfrak p)=[O_k/P:O_K/\mathfrak p]$; extend this norm multiplicatively to fractional ideals. The product and inverse embeddings are interpreted factorwise for the CM algebra, and $\varphi^{-1}$ transports the resulting ideal of $\varphi E_j$ to an ideal of $E_j$.

## Statement references

[J. S. Milne, “The Fundamental Theorem of Complex Multiplication,” Theorem 2.1](https://arxiv.org/pdf/0705.3446)

## Facts & Assumptions

**Given:** Exactly the number field, CM algebra and type, geometric integer-order, prime, good-reduction and ramification hypotheses of the Statement.

[A1] AC is the stated hypothesis and implies DC and Countable Choice for the arithmetic suppliers ([[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]]).

[F1] In this good-reduction situation the reduced CM centralizer is $E$, its integral centralizer is $O_E$, all elements of $O_E$ are defined over $k$, and the $q$-power Frobenius is induced by a unique $\pi\in O_E$. It is finite surjective of degree $q^g$ ([[lem-cm-centralizer-in-good-reduction-is-the-cm-algebra]], [[lem-q-power-frobenius-degree-on-abelian-variety]]).

[F2] For every $a\in E^\times$ which is an actual generic endomorphism, its model and special-fibre endomorphisms are finite faithfully flat of degree $|N_{E/\mathbb Q}(a)|$ ([[lem-cm-endomorphism-degree-is-field-norm]]).

[F3] Because $p$ is unramified in $E$, the reduced tangent action of $O_E$ is diagonal with characters $\Phi$. For $(\gamma)=v^r$ with $r\ge1$, the kernel dimension is $|\{\varphi\in\Phi:\varphi^{-1}(P)=v\}|$; for $r=0$ and unit $\gamma$ it is zero ([[lem-cm-type-tangent-character-eigenspaces-at-unramified-prime]]).

[F4] If a finite surjective homomorphism $u$ in characteristic $p$ satisfies $L^{p^s}\subseteq u^*L$, its full inseparable degree is at most $p^{s\dim\ker du_0}$. The pullback of $q$-power Frobenius on a function field over $\mathbb F_q$ is the $q$th-power map ([[lem-q-power-frobenius-degree-on-abelian-variety]]).

[F5] Number-field ideal class groups are finite. Every element's order in a finite group divides its cardinality ([[thm-finiteness-of-the-number-field-class-group]], [[thm-lagrange]]).

[F6] Nonzero fractional ideals have unique finite prime factorizations; containment is checked by their prime exponents. Absolute ideal norms are multiplicative, principal ideal norms are absolute field norms, and $N(v)=p^{f(v/p)}$ for a prime $v$ above $p$ ([[thm-number-field-integral-ideal-factorisation-in-zf]], [[def-fractional-ideal-norm-number-field]], [[thm-principal-ideal-norm-is-absolute-field-norm]], [[cor-norm-of-a-prime-ideal]]).

[F7] Geometric points detect equality of morphisms from a reduced finite-type scheme over an algebraically closed field, by the strong Nullstellensatz. Degrees in a finite field tower multiply ([[cor-strong-nullstellensatz-two-inclusions]], [[thm-tower-law-for-finite-field-extensions]]).

## Proof

1.1 By [F1], choose the unique $\pi\in O_E$ whose reduction is $F_q$. This element belongs to $E^\times$. If some field component were zero, a nonzero factor idempotent $e\in E$ would satisfy $e\pi=0$. After clearing an integer denominator, its nonzero specialized endomorphism would compose with the surjective Frobenius to zero. After algebraic closure it therefore vanishes on every geometric point, and [F7] makes it the zero endomorphism, contradicting the faithful reduced $E$-action in [F1]. Hence every component of $\pi$ is nonzero. [A1, F1, F7, given, construct, algebra]

2.1 By [F2] and [F1], $|N_{E/\mathbb Q}(\pi)|=\deg(F_q)=q^g$. Since $\pi$ is integral and invertible in $E$, [F6] factors its nonzero principal ideal into nonnegative prime powers. The absolute ideal norm is the $p$-power $q^g$, so every prime divisor lies above $p$: a prime above a different rational prime would contribute a positive power of that different prime to the norm. Thus write $(\pi)=\prod_{v\mid p}v^{m_v}$, allowing $m_v=0$. This proves support without assuming any Rosati or Weil identity such as $\pi\bar\pi=q$. [F1, F2, F6, step 1.1, algebra]

3.1 Let $h\ge1$ be a common multiple of the orders of the finitely many field-factor class groups, supplied by [F5]. For every prime $v\mid p$ choose $\gamma_v\in E^\times$ with $(\gamma_v)=v^{m_vh}$, interpreted with unit ideals in the other factors. Such a generator is integral because the ideal is integral. If $m_v=0$, choose $\gamma_v=1$. By step 2.1 and ideal containment in [F6], $\delta_v=\pi^h/\gamma_v$ belongs to $O_E$. All these elements are actual $k$-endomorphisms and extend to the model by [F1]. On the special fibre their compositions satisfy $\gamma_{v,0}\delta_{v,0}=\delta_{v,0}\gamma_{v,0}=F_q^h$. In particular the exponent in the chosen principal ideal is $m_vh$, rather than merely $h$. [A1, F1, F5, F6, step 2.1, choose, construct, algebra]

4.1 Put $\Phi_v=\{\varphi\in\Phi:\varphi^{-1}(P)=v\}$ and $d_v=|\Phi_v|$. Every character has exactly one contraction prime above $p$, so these finite sets partition $\Phi$ and $\sum_{v\mid p}d_v=g$. By [F3], the tangent-kernel dimension $e_v$ of $\gamma_{v,0}$ is $d_v$ if $m_v>0$ and zero if $m_v=0$. In both cases $e_v\le d_v$. The zero-exponent case has thus not been assigned the tangent kernel of a nonunit. [F3, step 3.1, given, algebra]

4.2 Let $L=\kappa(A_0)$, and write $q=p^f$. The finite surjective map $\gamma_{v,0}$ in [F2] has pullback subfield $\gamma_{v,0}^*L$. By step 3.1 and [F4], it contains $(F_q^h)^*L=L^{q^h}=L^{p^{fh}}$. Hence the actual inseparable-degree estimate [F4] applies with exponent $fh$, giving $\deg(\gamma_{v,0})\le q^{he_v}\le q^{hd_v}$. On the other hand [F2] and [F6] give $\deg(\gamma_{v,0})=|N_{E/\mathbb Q}(\gamma_v)|=N(v)^{m_vh}$. Taking positive real $h$th roots yields
$$N(v)^{m_v}\le q^{d_v}.$$
This includes $m_v=0$ and requires no separability or reduced-kernel assumption. [F2, F4, F6, step 3.1, step 4.1, algebra]

5.1 Multiply the finitely many inequalities in step 4.2. Their left product is $|N_{E/\mathbb Q}(\pi)|=q^g$ by step 2.1 and [F6]; their right product is $q^{\sum d_v}=q^g$ by step 4.1. Since all factors are positive, every inequality is equality: otherwise the total product would be strictly smaller. Thus $N(v)^{m_v}=q^{d_v}$ for every $v\mid p$, including those with zero exponent. If $f_v=[O_E/v:\mathbb F_p]$ and $f=[O_k/P:\mathbb F_p]$, comparison of powers of $p$ gives $m_vf_v=fd_v$. [F6, step 2.1, step 4.1, step 4.2, algebra]

6.1 For $\varphi\in\Phi_v$ through a field factor $E_j$, let $K=\varphi E_j\subset k$ and $\mathfrak p=P\cap O_K$. Its residue field identifies with $O_{E_j}/v$, so the residue tower and [F7] give $f(P/\mathfrak p)=f/f_v$. By the ideal norm convention in the unchanged Statement, $\varphi^{-1}(N_{k/K}(P))=v^{f/f_v}$. Multiplying over the $d_v$ characters of $\Phi_v$ gives $v^{fd_v/f_v}=v^{m_v}$ by step 5.1. All factors are interpreted in the specified field component, with unit ideals in the others. Multiplication over all $v\mid p$ and step 2.1 now gives exactly $(\pi)=\prod_{\varphi\in\Phi}\varphi^{-1}(N_{k/\varphi E}(P))$. The Frobenius assertion and uniqueness were proved in step 1.1, and the full original Statement follows. [F6, F7, step 1.1, step 2.1, step 5.1, algebra] ∎

## Source-reading boundary

The cached 2007 Milne article was read at Theorem2.1 and its full proof, printed16–18. Every specialization, centralizer, norm, tangent and inseparable-degree input used above now has a local proof. The exponent in the principalized local ideal is $m_vh$, and the zero-exponent case is explicit. Ideal support is proved from the positive integral norm $q^g$, so no separate Weil or Rosati identity is imported. The Statement and its arithmetic Frobenius/ideal-norm conventions are unchanged.
