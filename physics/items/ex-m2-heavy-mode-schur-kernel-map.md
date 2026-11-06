---
id: ex-m2-heavy-mode-schur-kernel-map
kind: example
title: M2 Heavy Mode Schur Kernel Map
status: published
origin: session
domain: mathematics
library: physics
category: string-theory
dependency_level: 1
axiom_strength: "ZF + AC"
deps:
  - def-axiom-of-choice
  - lem-m2-protected-block-index-comparison
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  lem-m2-protected-block-index-comparison: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: "Atiyah and Singer, The Index of Elliptic Operators I, Annals of Mathematics 87 (1968)"
      url: https://annals.math.princeton.edu/1968/87-3/p05
      locator: "pp. 484–530: Fredholm index as kernel dimension minus cokernel dimension"
generation:
  role: example
---

## Example

Assume full AC. Let the protected and high subspaces each be
$\mathbb C^{1|1}$, with their standard even/odd gradings. For real
coefficients $a,b,d$, define the odd self-adjoint block operator by
the even-to-odd matrix
$$
Q_+=\begin{pmatrix}a&b\\b&d\end{pmatrix}
$$
in the ordered bases $(P^+,H^+)$ and $(P^-,H^-)$, and put
$Q_-=Q_+^*$. When $d=2$, $a=\tfrac12$, and $b=1$, the high
block is invertible and the Schur complement is zero. Its kernel map
sends $1\in P^+$ to $(1,-\tfrac12)\in P^+\oplus H^+$, and similarly
in odd parity. When $d=0$, $a=0$, $b=1$, the high block is not
invertible and $Q_+$ is invertible, so the protected-block kernel
does not map to a full-operator kernel. The Schur formula is undefined
at the zero high eigenvalue. Both finite operators still have index
zero, so this example demonstrates failure of the kernel comparison
hypothesis, not an index mismatch. No physical membrane spectrum is
asserted.

The block decomposition is encoded below; the proof uses the displayed
matrices and verifies the cases directly.

```tikz
\begin{tikzpicture}[baseline=(current bounding box.center),>=stealth]
\node (source) at (0,0) {$P^+\oplus H^+$};
\node (target) at (5,0) {$P^-\oplus H^-$};
\draw[->] (source) -- node[above] {$Q_+=\left(\begin{array}{cc}a&b\\b&d\end{array}\right)$} (target);
\end{tikzpicture}
```

## Facts & Assumptions

**Given:** Full AC; the four one-dimensional graded summands, their standard Hermitian products, and the real block coefficients.

[F1] [[def-axiom-of-choice]]: full AC is the foundational assumption of the supplied block-index lemma.

[F2] [[lem-m2-protected-block-index-comparison]]: for a finite-dimensional graded protected block and an invertible high block, the Schur complement and full operator have the same even-to-odd index as the protected block, with parity-preserving kernel map $u\mapsto(u,-D^{-1}B^*u)$.

## Verification

1.1 All the displayed matrices act on their whole finite-dimensional source spaces and are closed. On $\mathcal H=(P^+\oplus H^+)\oplus(P^-\oplus H^-)$, the full operator is $Q=\begin{pmatrix}0&Q_-\\Q_+&0\end{pmatrix}$, so $Q(x_+,x_-)=(Q_-x_-,Q_+x_+)$. Since $Q_-=Q_+^*$, block adjunction gives $Q^*=Q$. For the grading $\Gamma(x_+,x_-)=(x_+,-x_-)$, direct substitution gives $Q\Gamma=-\Gamma Q$, proving that $Q$ is odd and self-adjoint. [given, algebra]

1.2 For $d=2,a=\tfrac12,b=1$, the protected block has coefficient $A_+=\tfrac12$, the high block has $D_+=2$, and the coupling is $B_+=1$. Thus $S_+=A_+-B_+D_+^{-1}B_+^*=\tfrac12-1\cdot\tfrac12\cdot1=0$. The full even-to-odd matrix is $\begin{pmatrix}\tfrac12&1\\1&2\end{pmatrix}$, whose kernel is spanned by $(1,-\tfrac12)$. The same real symmetric matrix acts in the odd direction, so it has the same one-dimensional odd kernel. The map in [F2] sends $1$ to $(1,-\tfrac12)$ because $-D^{-1}B^*1=-\tfrac12$; it preserves parity. The protected block $A_+=\tfrac12$ is invertible, so its kernel and cokernel are zero; the Schur block $S_+=0$ and the full matrix each have one-dimensional kernel and cokernel. Thus all three even-to-odd indices are zero. [F1, F2, given, algebra]

2.1 For $d=0,a=0,b=1$, the high block $D_+=0$ has no inverse, so $A_+-B_+D_+^{-1}B_+^*$ is not defined. The protected block $A_+=0$ has a one-dimensional even kernel, while the full matrix is $\begin{pmatrix}0&1\\1&0\end{pmatrix}$, whose square is the identity and whose kernel is zero; its odd adjoint matrix is identical. Hence the full operator has no kernel, although both protected vectors remain at zero. The index remains zero on each side: the full matrix is invertible, and the one-dimensional zero protected map has equal one-dimensional kernel and cokernel. Thus the Schur kernel formula fails precisely because the high inverse required for that formula does not exist; the example implies no physical spectral statement. [given, algebra] ∎
