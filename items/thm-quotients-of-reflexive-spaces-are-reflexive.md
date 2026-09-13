---
id: thm-quotients-of-reflexive-spaces-are-reflexive
kind: theorem
title: Quotients of reflexive spaces are reflexive
status: published
origin: pipeline
deps: ["def-reflexive-banach-space", "thm-dual-of-a-quotient-is-the-annihilator", "thm-relative-hahn-banach-norm-preserving-extension", "thm-quotient-of-banach-by-closed-subspace-is-banach", "def-hahn-banach-extension-principle-relative", "def-countable-choice"]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Bühler–Salamon, Functional Analysis"
      url: "https://people.math.ethz.ch/~salamon/PREPRINTS/funcana.pdf"
      locator: "Theorem 2.71(ii), quotient-space proof on printed pp. 91–92"
---

## Statement

Assume HB and the Axiom of Countable Choice $\mathrm{AC}_\omega$.  If $X$ is
a real or complex reflexive Banach space and $Y\subseteq X$ is a closed linear
subspace, then the quotient Banach space $X/Y$ is reflexive.

## Facts & Assumptions

**Given:** HB, $\mathrm{AC}_\omega$, a real or complex reflexive Banach space
$X$, and a closed scalar-linear subspace $Y\subseteq X$.

[F1] Reflexivity means that the canonical map $J_X:X\to X^{**}$ is
surjective, so every $x^{**}\in X^{**}$ is evaluation at a vector of $X$
([[def-reflexive-banach-space]]).

[F2] For the quotient map $q:X\to X/Y$, pullback is a scalar-linear isometric
bijection $Q:(X/Y)^*\to Y^\perp$, $Qh=h\circ q$
([[thm-dual-of-a-quotient-is-the-annihilator]]).

[F3] Under HB, every bounded scalar-linear functional on an arbitrary linear
subspace of a real or complex normed space extends to the whole space without
increasing its norm ([[thm-relative-hahn-banach-norm-preserving-extension]]).

[F4] Assuming $\mathrm{AC}_\omega$, the quotient of a Banach space by a
closed linear subspace is Banach for the quotient norm
([[thm-quotient-of-banach-by-closed-subspace-is-banach]]).

[F5] HB is the real dominated-extension principle over ZF, while
$\mathrm{AC}_\omega$ chooses from each supplied sequence of nonempty sets
([[def-hahn-banach-extension-principle-relative]], [[def-countable-choice]]).

## Proof

**Proof technique:** extend a quotient-bidual functional and represent the
extension in the reflexive ambient space.

1.1 Put $Z=X/Y$ and write $q:X\to Z$ for the quotient map.  By [F4], under the assumed $\mathrm{AC}_\omega$ the normed quotient $Z$ is Banach.  This includes $Y=X$, when $Z=\{0\}$, and $Y=\{0\}$, when the quotient norm is the original norm. [F4, F5, given]

1.2 Let $z^{**}\in Z^{**}$ be arbitrary.  The isometric bijection $Q:Z^*\to Y^\perp$ from [F2] has a scalar-linear isometric inverse.  Define $g:Y^\perp\to\mathbb K$ by $g(u)=z^{**}(Q^{-1}u)$.  It is a bounded scalar-linear functional with $\|g\|=\|z^{**}\|$; if $Y^\perp=\{0\}$, both sides are zero. [F2, given, algebra]

2.1 Apply [F3] under HB to the subspace $Y^\perp\subseteq X^*$.  There is $x^{**}\in X^{**}$ with $x^{**}|_{Y^\perp}=g$ and $\|x^{**}\|=\|g\|$.  Only this one supplied functional is extended; no family of extensions is chosen. [F3, F5, step 1.2]

3.1 Reflexivity of $X$ supplies an $x\in X$ with $x^{**}=J_Xx$.  Put $z=q(x)\in Z$. [F1, step 2.1]

4.1 For every $h\in Z^*$, [F2] gives $Qh=h\circ q\in Y^\perp$, and therefore $J_Zz(h)=h(qx)=Qh(x)=J_Xx(Qh)=x^{**}(Qh)=g(Qh)=z^{**}(h)$.  Hence $J_Zz=z^{**}$.  The calculation is scalar-linear over both fields and uses the bilinear evaluation convention, with no conjugation. [F2, step 1.2, step 2.1, step 3.1]

5.1 Since $z^{**}\in Z^{**}$ was arbitrary, $J_Z$ is surjective; together with the Banach conclusion in step 1.1, [F1] shows that $Z=X/Y$ is reflexive.  When $Y=X$, step 1.2 starts from the unique zero bidual functional and the same computation gives the zero representer; when $Y=0$, $Q$ is the usual identification and the computation reduces to ambient reflexivity.  HB is spent only in step 2.1, and $\mathrm{AC}_\omega$ only in step 1.1. [F1, F3, F4, step 1.1, step 4.1] ∎

## Source notes

Bühler–Salamon, Theorem 2.71(ii), printed pp. 91–92, gives the complete
annihilator-extension computation.  The proof above keeps its exact algebra
but states the repository's weak-choice costs: the selected quotient-
completeness theorem requires $\mathrm{AC}_\omega$, while the extension from
$Y^\perp$ to $X^*$ requires HB.  It does not claim that the quotient map sends
the ambient closed unit ball onto the quotient closed unit ball.
