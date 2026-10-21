---
id: lem-s4-convolution-root-of-unity-reduction
kind: lemma
title: DPLR SSM filter values reduce to Cauchy products
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps: [def-s4-dplr-parameterization, alg-s4-state-space-recurrence-and-convolution, alg-cauchy-matvec-at-roots-of-unity, lem-woodbury-dplr-bilinear-inverse]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Gu, Goel, and Ré, Efficiently Modeling Long Sequences with Structured State Spaces, Appendix C.3"
      url: "https://arxiv.org/pdf/2111.00396"
---

## Statement

Let $N,r\ge1$, $M=2^q\ge1$, $1\le L\le M$, $A=\Lambda-PQ^*$ with diagonal $\Lambda\in\mathbb C^{N\times N}$ and $P,Q\in\mathbb C^{N\times r}$, where $^*$ denotes conjugate transpose, $B,C\in\mathbb C^N$, and $\Delta>0$. Assume $G=I-\Delta A/2$ is invertible, define $\bar A=G^{-1}(I+\Delta A/2)$, $\bar B=G^{-1}\Delta B$, and put $\widetilde C_M=(I-\bar A^M)^*C$. For each $M$th root of unity $z\ne-1$, let $s(z)=(2/\Delta)(1-z)/(1+z)$, $R(z)=(s(z)I-\Lambda)^{-1}$, and $W(z)=I_r+Q^*R(z)P$. Assume all these $R(z)$ and $W(z)$ are invertible. The length-$M$ truncated generating value $H_M(z)=\sum_{j=0}^{M-1}C^*\bar A^j\bar B z^j$ then satisfies
$$
H_M(z)=\frac{2}{1+z}\left(\widetilde C_M^*R(z)B-\widetilde C_M^*R(z)P\,W(z)^{-1}Q^*R(z)B\right)\quad(z\ne-1).
$$
If $M$ is even, the root $z=-1$ has the finite value $H_M(-1)=(\Delta/2)\widetilde C_M^*B$. For $a=2/\Delta$ and each diagonal entry $\lambda_j\ne-a$, put $\mu_j=(a-\lambda_j)/(a+\lambda_j)$. For any $u,v\in\mathbb C^N$ and root $z\ne-1$,
$$
\frac{2}{1+z}u^*R(z)v=\frac{\Delta}{2}\sum_{\lambda_j=-a}\overline{u_j}v_j-2\sum_{\lambda_j\ne-a}\frac{\overline{u_j}v_j}{a+\lambda_j}\frac{1}{z-\mu_j}.
$$
Thus the four families of scalar products $\widetilde C_M^*RB$, $\widetilde C_M^*RP$, $Q^*RB$, and $Q^*RP$ reduce to $1+2r+r^2=(r+1)^2$ roots-of-unity Cauchy products; when $r=1$ there are four.

## Statement references

[Gu, Goel, and Ré, “Efficiently Modeling Long Sequences with Structured State Spaces,” Appendix C.3](https://arxiv.org/pdf/2111.00396)

[[alg-cauchy-matvec-at-roots-of-unity]]

[[def-s4-dplr-parameterization]]

## Facts & Assumptions

**Given:** The finite DPLR matrices, $1\le L\le M=2^q$, $\Delta>0$, the bilinear inverse, and all root-grid diagonal resolvents and low-rank corrections required in the Statement.

[A1] For every root $z\ne-1$, both $R(z)$ and $W(z)$ in the Statement are invertible; the bilinear matrix $G$ is invertible.

[F1] [[def-s4-dplr-parameterization]]: $\bar A=(I-\Delta A/2)^{-1}(I+\Delta A/2)$, $\bar B=(I-\Delta A/2)^{-1}\Delta B$, and the kernel coefficients are $C^*\bar A^j\bar B$.

[F2] [[lem-woodbury-dplr-bilinear-inverse]]: for invertible $D$, $(D+PQ^*)^{-1}=D^{-1}-D^{-1}P(I+Q^*D^{-1}P)^{-1}Q^*D^{-1}$ whenever the displayed correction is invertible.

[F3] [[alg-cauchy-matvec-at-roots-of-unity]]: on a primitive $M$th-root grid, the procedure returns $\sum_j a_j/(z_k-\mu_j)$ at each root, and reports a collision if a pole equals a root.

## Proof

1.1 Put $\alpha=\Delta/2$. For every root $z\ne-1$, substitution of $\bar A=G^{-1}(I+\alpha A)$ gives $I-z\bar A=G^{-1}((1-z)I-\alpha(1+z)A)=G^{-1}\alpha(1+z)(s(z)I-A)$. By [A1] and [F2], $s(z)I-A=(s(z)I-\Lambda)+PQ^*$ is invertible; inversion and multiplication by $\bar B=G^{-1}\Delta B$ give $(I-z\bar A)^{-1}\bar B=\frac{2}{1+z}(s(z)I-A)^{-1}B$. At $z=-1$, $I+\bar A=G^{-1}(G+I+\alpha A)=2G^{-1}$ is invertible. [A1, F1, F2, algebra]

1.2 For any root $z\ne-1$, put $a=1/\alpha=2/\Delta$. For $\lambda_j\ne-a$, direct algebra gives $s(z)-\lambda_j=\frac{(a-\lambda_j)-(a+\lambda_j)z}{1+z}=\frac{(a+\lambda_j)(\mu_j-z)}{1+z}$, hence $\frac{2}{1+z}(s(z)-\lambda_j)^{-1}=-\frac{2}{a+\lambda_j}(z-\mu_j)^{-1}$. For $\lambda_j=-a$, $s(z)-\lambda_j=2a/(1+z)$ and the scaled reciprocal is $1/a=\Delta/2$. No nonexceptional pole equals $-1$, since $\mu_j=-1$ would imply $2a=0$ although $a>0$. [A1, algebra]

2.1 At each root, $z^M=1$ and step 1.1 makes $I-z\bar A$ invertible. The finite geometric identity gives $(I-\bar A^M)(I-z\bar A)^{-1}=\sum_{j=0}^{M-1}z^j\bar A^j$. Multiplying by $C^*$ and $\bar B$, and using $\widetilde C_M^*=C^*(I-\bar A^M)$, gives $H_M(z)=\widetilde C_M^*(I-z\bar A)^{-1}\bar B$; for $z\ne-1$, step 1.1 supplies its bilinear resolvent expression. [F1, step 1.1, algebra]

3.1 Since $A=\Lambda-PQ^*$, $sI-A=(sI-\Lambda)+PQ^*$. Applying [F2] with $D=sI-\Lambda$ and multiplying by $\widetilde C_M^*$ and $B$ gives the displayed Woodbury expression for $H_M(z)$ from step 2.1, with $R=(sI-\Lambda)^{-1}$ and $W=I+Q^*RP$. [A1, F2, step 2.1, algebra]

3.2 If $M$ is even, $-1$ is a root. Step 1.1 gives $(I+\bar A)^{-1}\bar B=(1/2)G(G^{-1}\Delta B)=(\Delta/2)B$; applying the finite geometric identity from step 2.1 yields $H_M(-1)=\widetilde C_M^*(I+\bar A)^{-1}\bar B=(\Delta/2)\widetilde C_M^*B$. [A1, F1, step 1.1, step 2.1, algebra]

4.1 By step 1.2, each scaled diagonal-resolvent entry in step 3.1 is one scalar roots-of-unity Cauchy sum, with the $\lambda_j=-a$ entries supplied by their explicit constants. The four vector-pair families $\widetilde C_M^*RB$, $\widetilde C_M^*RP$, $Q^*RB$, and $Q^*RP$ have sizes $1,r,r,r^2$, so [F3] evaluates at most $(r+1)^2$ products; at $r=1$ this is four. [A1, F3, step 1.2, step 3.1, algebra] ∎
