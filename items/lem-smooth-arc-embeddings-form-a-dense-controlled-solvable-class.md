---
id: lem-smooth-arc-embeddings-form-a-dense-controlled-solvable-class
kind: lemma
title: Smooth arc embeddings form a dense controlled solvable class
status: draft
origin: session
deps:
  - lem-euclidean-parametric-transversality-and-canonical-good-parameters
  - lem-compact-euclidean-arc-isotopies-have-canonical-controlled-extensions
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
---

## Statement

Smooth embeddings $[0,1]\to\mathbb R^4$ are uniformly dense among continuous maps. Moreover, for every $\epsilon>0$ there is $\delta>0$ such that any two smooth embeddings $f,g:[0,1]\to\mathbb R^4$ with $\sup_s|f(s)-g(s)|<\delta$ are related by an ambient smooth isotopy $H_t$ satisfying $H_1f=g$, $|H_t(x)-x|<\epsilon$ for all $x,t$, and $H_t(x)=x$ whenever $\operatorname{dist}(x,f([0,1]))\ge\epsilon$. More generally, if $C\subseteq[0,1]$ is a finite union of nondegenerate closed intervals and $f=g$ on $C$, the curve isotopy $H_tf$ can be fixed on $C$. If in addition $B\subseteq\mathbb R^4$ is closed and disjoint from $f([0,1]\setminus\operatorname{Int}C)$, all ambient maps can be fixed on $B$, provided $\epsilon$ is smaller than one third of the distance between these two sets. Here $\operatorname{Int}C$ means interior relative to $[0,1]$. The empty set $C$ is allowed when no relative condition is prescribed; if $C=[0,1]$, take the identity isotopy.

## Facts & Assumptions

**Given:** The Euclidean metric on $\mathbb R^4$.

[F1] Euclidean parametric transversality holds without choice. For compact curve families, the set of parameters giving embeddings at every time is open; if it is nonempty inside a prescribed open parameter neighborhood, the first qualifying rational tuple selects a parameter. [[lem-euclidean-parametric-transversality-and-canonical-good-parameters]]

[F2] A compact Euclidean arc isotopy with a supplied smooth extension admits a norm-controlled ambient velocity extension and flow without choice. The construction uses least finite rational graph covers and explicit bump functions. [[lem-compact-euclidean-arc-isotopies-have-canonical-controlled-extensions]]

## Proof

**Given:** The indicated Euclidean arc spaces. For constructing a single isotopy, choose smooth extensions of its two input curves; this is a finite choice, valid in ZF. For a specified repeated selector, supply these extensions as part of the input.

1.1 Every continuous curve is uniformly approximated by a smooth curve: extend it constantly beyond its two endpoints, use uniform continuity to choose a small scale, and convolve its four real coordinate functions with a smooth nonnegative bump of integral one at that scale. For any smooth approximating curve $a$, the curves $a(s)+u+sv$ are embeddings for arbitrarily small $(u,v)$. The derivative evaluation $a'(s)+v$ is a submersion in $v$; the difference evaluation $a(s)-a(r)+(s-r)v$ for $s\ne r$ is also a submersion in $v$. Apply [F1] on the finitely many source boundary strata. Their dimensions are at most one and two, respectively, below four, so almost every small parameter makes both zero inverse images empty. The result is an injective immersion and hence an embedding because its source is compact. This proves density. [F1, given, construct, choose]

1.2 Fix smooth functions $\rho,\eta:[0,1]\to[0,1]$, with $\rho=0$ near zero and $\rho=1$ near one, and $\eta=0$ on those time collars and $\eta>0$ between them. For close $f,g$, use $F(s,t)=(1-\rho(t))f(s)+\rho(t)g(s)$ and the perturbation $F_{u,v}=F+\eta(t)(u+sv)$. The derivative evaluation has parameter coefficients $0,\eta$ on the two four-dimensional parameter blocks when $\eta>0$, so it is a submersion there. For a pair $s\ne r$, its difference evaluation has parameter coefficient $(s-r)\eta$ on the second block, likewise nonzero. On the time collars the slices are already $f$ or $g$. Their source dimensions are two and three, below four, so [F1] gives an isotopy from $f$ to $g$ for arbitrarily small parameters. Its points lie within $2\delta$ of $f([0,1])$ if $|u|+|v|<\delta$. For the relative case choose a smooth $\chi_s:[0,1]\to[0,1]$ zero exactly on $C$ and positive off $C$, and replace $\eta(t)$ by $\eta(t)\chi_s(s)$. The same calculation still applies: where $\chi>0$, the derivative coefficients are $\partial_s\chi$ and $\chi+s\partial_s\chi$, which cannot both vanish. The pair coefficients are $\chi(s,t)-\chi(r,t)$ and $s\chi(s,t)-r\chi(r,t)$; at a cutoff zero the derivative is that of the common embedding, and at times with $\eta(t)>0$, if the two pair coefficients vanish both source points lie in $C$, where their common values are distinct. At the remaining times the slices are the original embeddings $f$ or $g$. This argument also covers the source endpoints using their boundary strata. Choose the first qualifying rational parameter tuple within the required small ball using [F1]. In both cases its time velocity is bounded by $L\delta$, where the constant $L=\|\rho'\|_\infty+\|\eta'\|_\infty+1$ is independent of $f,g$ and the relative source cutoff. [F1, construct, algebra]

2.1 For completeness the velocity extension can preserve this uniform estimate. The compact embedded track is a smooth submanifold of $\mathbb R^4\times[0,1]$, with the usual source boundary corners. In each track chart extend the velocity components smoothly by the track projection. At each track point its Euclidean norm is at most $L\delta$; by continuity and shrinking the extension neighborhood its norm is less than $(L+1)\delta$. Cover the compact track by finitely many such neighborhoods and blend using nonnegative smooth partition weights summing to one near the track. Convexity of the Euclidean norm preserves the bound. Multiply by a cutoff equal to one on the track and supported in its open $\delta$-neighborhood, so its spatial support lies inside the $3\delta$-neighborhood of $f([0,1])$. Extend by zero. The resulting smooth time-dependent ambient field still gives the prescribed velocity, has norm less than $(L+1)\delta$, and has common compact spatial support. Its flow [F2] consequently extends the isotopy and moves each ambient point through total length less than $(L+1)\delta$. It fixes points outside the $3\delta$-neighborhood. Choose $\delta<\epsilon/(L+4)$. Both required controls follow. The relative fixed-source conclusion follows because the prescribed curve velocity is zero on $C$. [F2, step 1.2, construct, algebra]

3.1 For the protected-set clause let $A=f([0,1]\setminus\operatorname{Int}C)$. This is compact and disjoint from the closed set $B$, so $d=\operatorname{dist}(A,B)>0$. The closure $K$ of the spatial positions having nonzero time velocity lies within $2\delta$ of $A$: every source point with nonzero time velocity is outside $C$, and limits remain in the displayed closed source complement. Take $\delta$ smaller if necessary so $2\delta<d/2$. Choose a smooth spatial cutoff equal to one on a neighborhood of $K$ and zero on a neighborhood of $B$. Multiplying the velocity extension in step 2.1 by this cutoff preserves its norm and support estimates. It also preserves its prescribed track velocity: outside $K$ that velocity is zero. The new flow still extends the curve isotopy and is the identity on $B$. For instance $\epsilon<d/3$ and the previous bound $\delta<\epsilon/(L+4)$ ensure the needed separation. This proves the additional clause. [F2, step 1.2, step 2.1, construct] ∎

## Remarks

With supplied input extensions, all cutoffs can be fixed explicit functions of the endpoints of $C$, the generic parameter is the first qualifying rational tuple, and [F2] specifies the field and flow. These give a specified controlled-isotopy selector without dependent or countable choice.

This proves the density and controlled solvability input for the smooth embedding class in the Euclidean four-dimensional arc case. It does not itself establish topological taming of a locally flat arc. A complete back-and-forth construction, with control of inverse limits and relative support, is still needed to transfer between local chart structures.
