---
id: ex-the-padded-family-for-lambda-two-one-begins-at-rank-five
kind: example
title: "The padded family $V((2,1))$ begins at rank five, with weight three and stability degree two"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 5
deps: [prop-fi-module-realizing-one-padded-irreducible-family,
       def-first-row-padding-of-a-partition,
       def-weight-of-a-characteristic-zero-fi-module,
       def-injectivity-surjectivity-and-stability-degree-of-an-fi-module,
       lem-specht-modules-classify-irreducibles-over-characteristic-zero-fields]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Thomas Church, Jordan S. Ellenberg and Benson Farb, “FI-modules and stability for representations of symmetric groups”, arXiv:1204.4533v4 (2014); published in Duke Math. J. 164 (2015) 1833–1910"
      url: "https://arxiv.org/pdf/1204.4533"
      locator: "Definition 2.2.5 and Proposition 3.4.1, printed pp. 13 and 24–25: the padded family $V(\\lambda)_n=V_{\\lambda[n]}$ and the remark that for $\\lambda=(2,1)$ it begins at $n=5$"
    - title: "I. G. Macdonald, Symmetric Functions and Hall Polynomials, 2nd ed., Oxford Mathematical Monographs, 1995 (author-hosted full text)"
      url: "https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf"
      locator: "Chapter I §7, Example I.7.14, printed pp. 122–124 (the padding convention $(N,\\lambda_1,\\lambda_2,\\dots)$ with $N\\ge\\lambda_1$)"
---

## Example

Let $\lambda=(2,1)$, so $m:=|\lambda|=3$ and $\lambda_1=2$, and let
$\lambda[n]$ be the first-row padding
([[def-first-row-padding-of-a-partition]]). Then
$\lambda[n]=(n-3,2,1)$, and this is a partition exactly for

$$n\ge5=|\lambda|+\lambda_1:$$

for $n=3$ the sequence $(0,2,1)$ is not weakly decreasing, for $n=4$ the
sequence $(1,2,1)$ still is not, and for $n\ge5$ the first entry $n-3$ is at
least $\lambda_1=2$, so the sequence is a partition of $n$. The padded family
therefore begins at rank five, two ranks later than $|\lambda|=3$.

Accordingly, for a field $k$ of characteristic $0$, the FI-module
$V((2,1))$ of
[[prop-fi-module-realizing-one-padded-irreducible-family]] has values

$$V((2,1))_n\cong V_{(n-3,2,1)}\ (n\ge5),\qquad V((2,1))_n=0\ (n<5),$$

is generated in degree exactly $5$, and has
$\operatorname{weight}(V((2,1)))=3$ and
$\operatorname{inj-deg}(V((2,1)))=0$,
$\operatorname{surj-deg}(V((2,1)))=\operatorname{stab-deg}(V((2,1)))=2$
([[def-weight-of-a-characteristic-zero-fi-module]],
[[def-injectivity-surjectivity-and-stability-degree-of-an-fi-module]]). For
instance $V((2,1))_5\cong V_{(2,2,1)}$, $V((2,1))_6\cong V_{(3,2,1)}$ and so
on: the first row grows while the second row stays at $2$. No choice principle
is used.

## Facts & Assumptions

**Given:** A field $k$ of characteristic $0$; the partition $\lambda=(2,1)$ with $m=|\lambda|=3$ and $\lambda_1=2$, the integers $d=m+\lambda_1=5$, and the first-row padding $\lambda[n]$ ([[def-first-row-padding-of-a-partition]]).

[F1] $\alpha[n]=(n-|\alpha|,\alpha_1,\alpha_2,\dots)$ is defined and a partition of $n$ exactly for $n\ge|\alpha|+\alpha_1$; for smaller nonnegative $n\ge|\alpha|$ the displayed sequence fails to be weakly decreasing ([[def-first-row-padding-of-a-partition]]).

[F2] For a field $k$ of characteristic $0$ and a partition $\alpha$ with $|\alpha|=m'$, $d'=m'+\alpha_1$, there is a sub-FI-module $V(\alpha)\subseteq M(\alpha)$ with $V(\alpha)_n\cong V_{\alpha[n]}$ for $n\ge d'$ and $V(\alpha)_n=0$ for $n<d'$; its generation degree is exactly $d'$, and $\operatorname{weight}(V(\alpha))=m'$, $\operatorname{inj-deg}(V(\alpha))=0$, $\operatorname{surj-deg}(V(\alpha))=\operatorname{stab-deg}(V(\alpha))=\alpha_1$ ([[prop-fi-module-realizing-one-padded-irreducible-family]]).

[F3] For $\eta\vdash n$, $V_\eta$ is the irreducible $kS_n$-module with label $\eta$; in particular $V_{\lambda[n]}$ is the irreducible labelled by the padded partition, and $|\eta|-\eta_1$ (with $\eta_1=0$ when $\eta=\varnothing$) is the size of the padding tail, hence the weight label of that irreducible ([[lem-specht-modules-classify-irreducibles-over-characteristic-zero-fields]], [[def-weight-of-a-characteristic-zero-fi-module]]).

[F4] The injectivity, surjectivity and stability degrees of an FI-module are those of [[def-injectivity-surjectivity-and-stability-degree-of-an-fi-module]], with $\operatorname{stab-deg}=\max(\operatorname{inj-deg},\operatorname{surj-deg})$.

## Verification

**Proof technique:** direct.

1.1 Substituting $\lambda=(2,1)$ gives $\lambda[n]=(n-3,2,1)$: for $n<3$ the first entry is negative, for $n=3$ it is $0<2$ and for $n=4$ it is $1<2$, so in these cases the sequence is not a partition; for $n\ge5$ the first entry is at least $2$, the entries are nonnegative and weakly decreasing and their sum is $(n-3)+2+1=n$. Hence $\lambda[n]$ is a partition exactly for $n\ge5=|\lambda|+\lambda_1$. [F1, given]

2.1 Apply [F2] with $\alpha=\lambda=(2,1)$, so $m'=3$ and $d'=5$: there is a sub-FI-module $V((2,1))$ of $M((2,1))$ with $V((2,1))_n\cong V_{\lambda[n]}=V_{(n-3,2,1)}$ for $n\ge5$ and $V((2,1))_n=0$ for $n<5$, of generation degree exactly $5$, weight $3$, injectivity degree $0$ and surjectivity degree $2$, so that its stability degree is $2$. [F2, F3, F4, step 1.1]

3.1 Steps 1.1 and 2.1 show that the padded family $V((2,1))$ begins at rank five, not at $|\lambda|=3$, is generated in degree $5$, and has weight $3$ and stability degree $2$; the second row of each constituent diagram $\lambda[n]=(n-3,2,1)$ remains $2$ while the first row grows. No choice principle is used. [F2, F3, step 1.1, step 2.1] ∎
