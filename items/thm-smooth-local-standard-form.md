---
id: thm-smooth-local-standard-form
kind: theorem
title: "Smooth maps have étale local affine-space form"
status: draft
origin: pipeline
deps:
  - def-smooth-morphism-schemes
  - def-relative-dimension-smooth-morphism
  - def-etale-morphism-schemes
  - thm-jacobian-criterion-smooth-morphism
  - def-ag-standard-smooth-algebra
  - def-locally-finite-presentation-morphism
  - ex-affine-n-space-over-arbitrary-base
  - def-affine-open-subscheme
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Morphisms of Schemes, Section 29.34 (smooth morphisms are locally affine space over the base, tags 01V4-01V9)"
      url: https://stacks.math.columbia.edu/download/morphisms.pdf
    - title: "Ravi Vakil, The Rising Sea, 29 August 2022 public draft, Section 25.3"
      url: https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf
---

## Statement

Assume the Axiom of Choice (AC). Let $f:X\to S$ be smooth at $x\in X$ with
relative dimension $n=\operatorname{reldim}_f(x)$
([[def-relative-dimension-smooth-morphism]]). Then there are affine open
subschemes $V=\operatorname{Spec}A\subseteq S$ containing $s=f(x)$ and
$U_0=\operatorname{Spec}C\subseteq X$ containing $x$ with $f(U_0)\subseteq V$,
an element $h\in C$ and affine open subschemes $U=\operatorname{Spec}C_h\subseteq
U_0$ containing $x$, such that $U\to f(U)\subseteq V$ factors as
$$U\xrightarrow{\ \text{étale}\ }\mathbf A^n\times_SV\longrightarrow V,$$
where $\mathbf A^n_S$ is the relative affine space over the base
([[ex-affine-n-space-over-arbitrary-base]]) and the first arrow is étale at $x$
and is an $S$-morphism. The target is only shrunk Zariski locally: the
factorisation is asserted over the chosen affine $V\subseteq S$.

Equivalently, a smooth morphism of relative dimension $n$ is locally, on the
source, étale over relative affine $n$-space over the base.

## Facts & Assumptions


**Given:** The data and hypotheses displayed in the Statement, with the conventions fixed there.

[F1] Assume AC. For $f$ locally of finite presentation at $x$ with $s=f(x)$, $f$ is smooth at $x$ if and only if there are affine opens $U_0=\operatorname{Spec}C$ of $x$ and $V=\operatorname{Spec}A$ of $s$ with $f(U_0)\subseteq V$ and a presentation of $C_h$, for some $h\in C\smallsetminus\mathfrak q$, as $C_h\cong(A[t_1,\dots,t_m]/(f_1,\dots,f_r))_g$ in which some $r\times r$ minor of the Jacobian matrix is a unit of $C_h$; such a chart is flat with geometrically regular fibres and exhibits relative dimension $m-r$ at $x$ ([[thm-jacobian-criterion-smooth-morphism]], [[def-relative-dimension-smooth-morphism]]).

[F2] A standard smooth presentation of an $R$-algebra $S$ is a presentation $S\cong(R[x_1,\dots,x_m]/(f_1,\dots,f_r))_g$ with an invertible $r\times r$ Jacobian minor; the integer $m-r\ge0$ is its relative dimension, the permutation of variables replaces a given invertible minor by one in the first $r$ columns without changing the relative dimension, and $c=0$ (a localisation of a polynomial ring) is allowed ([[def-ag-standard-smooth-algebra]]).

[F3] $f$ is étale at $x$ when it is smooth at $x$ and $\operatorname{reldim}_f(x)=0$; the chart of [F1] is smooth with relative dimension $m-r$, so a chart with $m=r$ and invertible Jacobian minor is étale at the corresponding point ([[def-etale-morphism-schemes]], [[def-relative-dimension-smooth-morphism]]).

[F4] A morphism with affine charts on which the ring map is a finitely presented algebra is locally of finite presentation ([[def-locally-finite-presentation-morphism]]), and a standard smooth presentation is a finitely presented algebra ([[def-ag-standard-smooth-algebra]]).

[F5] On $S=\operatorname{Spec}A$ one defines $\mathbf A^n_S=\operatorname{Spec}A[t_1,\dots,t_n]$ with its structure morphism, and these definitions agree under localisation of $A$, so $\mathbf A^n\times_SV$ is $\operatorname{Spec}A[t_1,\dots,t_n]$ for the affine open $V=\operatorname{Spec}A\subseteq S$ and equals $\mathbf A^n_S\times_SV$ ([[ex-affine-n-space-over-arbitrary-base]]).

[F6] An open subset of a scheme is given the open subscheme structure; a principal open $D(h)$ of an affine $\operatorname{Spec}C$ is the affine open subscheme $\operatorname{Spec}C_h$ ([[def-affine-open-subscheme]]).

[F7] The Axiom of Choice states that every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 The smooth chart. By [F1] there are affine opens $U_0=\operatorname{Spec}C$ containing $x$ and $V=\operatorname{Spec}A$ containing $s$ with $f(U_0)\subseteq V$, an element $h\in C$ not in the prime $\mathfrak q$ of $x$, and a presentation $C_h\cong(A[t_1,\dots,t_m]/(f_1,\dots,f_r))_g$ whose Jacobian has an invertible $r\times r$ minor; this chart exhibits relative dimension $m-r$ at $x$. Since $f$ is smooth at $x$ by hypothesis and [F1] is an iff, such a chart exists; set $n:=\operatorname{reldim}_f(x)=m-r$, a nonnegative integer. [F1]

2.1 Regrouping the variables. By [F2] we may permute $t_1,\dots,t_m$ so that the invertible minor involves the first $r$ columns, and we write $A':=A[t_{r+1},\dots,t_m]=A[y_1,\dots,y_n]$ with $y_i=t_{r+i}$. Then $A[t_1,\dots,t_m]=A'[t_1,\dots,t_r]$, and the presentation of step 1.1 becomes $C_h\cong(A'[t_1,\dots,t_r]/(f_1,\dots,f_r))_g$; the $r\times r$ matrix $(\partial f_j/\partial t_i)_{i,j\le r}$ is invertible in $C_h$ by construction. This is a standard smooth presentation of $C_h$ over $A'$ with $m'=r$ variables and $c=r$ equations, hence of relative dimension $m'-c=0$, by [F2]. [F2, step 1.1]

3.1 The étale arrow. The map $\operatorname{Spec}C_h\to\operatorname{Spec}A'$ has an affine chart with a finitely presented algebra $A'\to C_h$ (step 2.1), so it is locally of finite presentation by [F4] and the presentation of step 2.1 is a chart with invertible Jacobian minor in the sense of [F1]; by the two-way criterion of [F1] it is smooth at the prime of $x$, and its relative dimension there is $r-r=0$. By [F3] the morphism $\operatorname{Spec}C_h\to\operatorname{Spec}A'$ is étale at $x$. [F1, F3, F4, step 2.1]

4.1 The factorisation. By [F5] the affine scheme $\operatorname{Spec}A'=\operatorname{Spec}A[y_1,\dots,y_n]$ is $\mathbf A^n\times_SV\subseteq\mathbf A^n_S$, the relative affine space over the affine open $V\subseteq S$. The composite $\operatorname{Spec}C_h\to\operatorname{Spec}A'\to V=\operatorname{Spec}A$ is the morphism induced by $A\to A'\to C_h$, which is the restriction of the structure map $A\to C$ of the chart; hence it is the restriction of $f$ to the principal open $U=\operatorname{Spec}C_h\subseteq U_0$, which contains $x$ by [F6] and lies over $V$ by step 1.1. This gives the asserted factorisation of $f|_U$ through $\mathbf A^n\times_SV\to V\subseteq S$, with first arrow étale at $x$ by step 3.1. [F5, F6, step 1.1, step 3.1]

5.1 Conclusion and accounting. Steps 1.1, 2.1, 3.1 and 4.1 produce, for a smooth $f$ of relative dimension $n$ at $x$, the affine opens $V\subseteq S$ and $U=\operatorname{Spec}C_h\subseteq X$ together with the étale $S$-morphism $U\to\mathbf A^n\times_SV$, whose composite with the projection to $S$ is the restriction of $f$. The Axiom of Choice [F7] is assumed in the Statement and is used exactly through the Jacobian criterion [F1] in steps 1.1 and 3.1; the regrouped presentation is built from the same data and makes no further choice. [F1, F3, F7, step 4.1] $\square$
