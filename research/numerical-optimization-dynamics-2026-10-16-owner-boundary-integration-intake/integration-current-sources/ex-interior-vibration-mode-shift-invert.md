---
id: ex-interior-vibration-mode-shift-invert
kind: example
title: "Shift-invert isolates an interior vibration mode and records solve error"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 8
deps:
  - alg-shift-invert-and-harmonic-ritz-extraction
  - thm-shift-invert-map-and-inexact-solve-residual-transfer
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
proof_strategy: direct
sources:
  references:
    - title: "Yousef Saad, Numerical Methods for Large Eigenvalue Problems, second edition, §8.1"
      url: "https://www-users.cse.umn.edu/~saad/eig_book_2ndEd.pdf"
    - title: "Peter Arbenz, Lecture Notes on Solving Large Scale Eigenvalue Problems, §§11.4 and 12.6"
      url: "https://people.inf.ethz.ch/arbenz/ewp/Lnotes/lsevp.pdf"
---

## Example

Use the exact shift-invert branch with start $v=e_2$, Arnoldi dimension $m=1$
and residual tolerance $\tau=0$. Use the mass-normalized three-mode vibration matrix
$A=\operatorname{diag}(1,4,9)$ and $B=I$, and seek its interior eigenvalue
$4$ with shift $\sigma=19/5$. The shifted matrix is invertible because
$\sigma\notin\{1,4,9\}$. In a separate harmonic-branch invocation, use the
same $A$ and $\sigma$, trial basis $U=e_2$, QZ sweep budget $N=1$, and QZ
tolerance $\tau_{QZ}=0$.

## Verification

**Given:** $A$, $B$, $\sigma$, the exact target vector $u=e_2$, and the
separate harmonic invocation inputs $U=e_2$, $N=1$, and $\tau_{QZ}=0$.

[F1] [[alg-shift-invert-and-harmonic-ritz-extraction]]: in the exact shift-invert branch, a Ritz value $\theta\ne0$ maps to $\lambda=\sigma+1/\theta$.

[F2] [[alg-shift-invert-and-harmonic-ritz-extraction]]: the harmonic branch uses the projected pencil $G-\eta C$.

[F3] [[alg-shift-invert-and-harmonic-ritz-extraction]]: a finite QZ diagonal pair $(\alpha,\beta)$ maps to $\sigma+\alpha/\beta$.

[F4] [[thm-shift-invert-map-and-inexact-solve-residual-transfer]]: $(A-\lambda I)u=\theta^{-1}(s_0-Mr_T)$, with $s_0=My-u$ and $r_T=y-\theta u$.

1.1 Here $M=\operatorname{diag}(-14/5,1/5,26/5)$ and $M^{-1}=\operatorname{diag}(-5/14,5,5/26)$. Thus the interior mode 4 maps to $\theta=5$, whose modulus exceeds the other transformed eigenvalue moduli $5/14$ and $5/26$; $19/5+1/5=4$. In the separate harmonic invocation, $W=MU=e_2/5$, so $G=W^*W=1/25$ and $C=W^*U=1/5$. The QZ input is this regular one-by-one pencil, already upper triangular with a nonzero diagonal pair, so the QZ procedure's computed condition holds and its status is `qz-computed`; $(\alpha,\beta)=(1/25,1/5)$. The scalar equation $G-\eta C=0$ gives $\eta=1/5$ and the same value $\sigma+\eta=4$. [given, F1, F2, F3, algebra]

2.1 For an inexact solve take $y=(49/10)e_2$ and $\theta=49/10$. Then $s_0=My-u=-e_2/50$ and $r_T=0$, while the mapped value is $\lambda=19/5+10/49=981/245$. Its original residual is $(A-\lambda I)u=-e_2/245$, which equals $\theta^{-1}(s_0-Mr_T)=-e_2/245$ by [F4]. [given, F4, step 1.1, algebra] ∎
