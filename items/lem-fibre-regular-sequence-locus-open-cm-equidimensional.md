---
id: lem-fibre-regular-sequence-locus-open-cm-equidimensional
kind: lemma
title: Fibrewise regular sequences persist openly in equidimensional Cohen-Macaulay fibres
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-axiom-of-choice
  - def-scheme-theoretic-fibre
  - lem-cm-local-regular-sequence-dimension-drop
  - lem-affine-local-dimension-residue-transcendence
  - lem-local-fibre-dimension-bound-via-polynomial-quasifiniteness
  - lem-cm-equidimensional-fibre-dimension-bound-regular-sequence
  - cor-cohen-macaulayness-localises
  - thm-affine-domain-dimension-transcendence-degree
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "The Stacks Project, Algebra, Lemma 10.129.2 (tag 00RA), openness of regular sequences in fibres"
      url: https://stacks.math.columbia.edu/tag/00RA
---

## Statement

Assume the Axiom of Choice. Let $R\to S$ be a finite-type
ring map whose fibres $S\otimes_R\kappa(\mathfrak p)$ are
Cohen–Macaulay and equidimensional of one fixed dimension
$d$. Let $f_1,\ldots,f_i\in S$, and put $Z=V(f_1,\ldots,f_i)$.
Then the set of $\mathfrak q\in Z$ for which the images of
$f_1,\ldots,f_i$ form a regular sequence in the local fibre
$S_{\mathfrak q}/\mathfrak pS_{\mathfrak q}$, where
$\mathfrak p=\mathfrak q\cap R$, is open in $Z$.

The empty set $Z$ and empty regular sequence $i=0$ are included.

## Facts & Assumptions

**Given:** The finite-type family with Cohen–Macaulay equidimensional fibres, the tuple, and its closed zero set.

[F1] In a Cohen–Macaulay Noetherian local ring, a regular sequence of length $i$ lowers local ring dimension by $i$ ([[lem-cm-local-regular-sequence-dimension-drop]]).

[F2] For a finite-type algebra $A$ over a field and a point $q$, local scheme dimension equals $\dim A_q$ plus the residue-field transcendence degree. In an equidimensional fibre of dimension $d$, this local scheme dimension is $d$ at every point ([[lem-affine-local-dimension-residue-transcendence]], [[def-scheme-theoretic-fibre]]).

[F3] For a finite-type ring map $R\to C$, if the fibre of $C$ has local dimension $n$ at a point, then on a source neighbourhood every fibre has local dimension at most $n$ at each point of that neighbourhood ([[lem-local-fibre-dimension-bound-via-polynomial-quasifiniteness]]).

[F4] In an equidimensional Cohen–Macaulay finite-type $k$-algebra $A$ of dimension $d$, equations with quotient dimension at most $d-i$ form a regular sequence at all primes containing them ([[lem-cm-equidimensional-fibre-dimension-bound-regular-sequence]]). Localization of a finite-type Cohen–Macaulay equidimensional $k$-algebra at a nonempty principal open remains Cohen–Macaulay and equidimensional of dimension $d$: each surviving irreducible component has the same fraction field and hence the same dimension $d$ ([[cor-cohen-macaulayness-localises]], [[thm-affine-domain-dimension-transcendence-degree]]).

## Proof

**Proof technique:** translate regularity at one fibre point into a sharp quotient dimension, spread that bound, and recover regularity on each nearby fibre.

1.1 If $Z=\varnothing$, the assertion is immediate. For $i=0$, the empty sequence is regular at every point, so the locus is all of $Z$. Assume $i>0$, and fix a point $\mathfrak q\in Z$ where the displayed fibre sequence is regular. Put $\mathfrak p=\mathfrak q\cap R$ and $A=S\otimes_R\kappa(\mathfrak p)$, with corresponding prime $q$ of $A$. The local fibre ring $A_q$ is Cohen–Macaulay of dimension $h$, and [F1] makes $A_q/(f_1,\ldots,f_i)A_q$ of dimension $h-i$. In particular $i\le h\le d$. [F1, F2]

2.1 The residue field $\kappa(q)$ is the same for the point of the quotient fibre. By [F2], the local scheme dimension of the original fibre at $q$ is $h+\operatorname{trdeg}_{\kappa(\mathfrak p)}\kappa(q)=d$. Applying the same formula to the quotient fibre and using step 1.1 gives its local scheme dimension at $q$ as $h-i+\operatorname{trdeg}_{\kappa(\mathfrak p)}\kappa(q) =d-i$. [F1, F2, step 1.1]

3.1 Apply [F3] to the finite-type map $R\to C=S/(f_1,\ldots,f_i)$ at the point $\mathfrak q/I$, with $n=d-i$. It gives an open neighbourhood $W\subseteq\operatorname{Spec}C=Z$ of $\mathfrak q$ on which every quotient fibre has local scheme dimension at most $d-i$. [F3, step 2.1]

4.1 Let $\mathfrak q'\in W$ over $\mathfrak p'$ and put $A'=S\otimes_R\kappa(\mathfrak p')$. By the meaning of local scheme dimension, there is a principal open $D(g)\subseteq\operatorname{Spec}(A'/(f_1,\ldots,f_i))$ containing the point corresponding to $\mathfrak q'$ whose dimension is at most $d-i$. Lift $g$ to $A'$. The nonempty ring $A'_g$ is Cohen–Macaulay and equidimensional of dimension $d$ by [F4], and $A'_g/(f_1,\ldots,f_i)$ is the coordinate ring of that chosen principal open, of dimension at most $d-i$. Apply [F4] to $A'_g$; the tuple is regular at its prime corresponding to $\mathfrak q'$, which is exactly the local-fibre regularity in the Statement. [F3, F4, step 3.1]

5.1 Every $\mathfrak q'\in W$ therefore lies in the regular-sequence locus, while $\mathfrak q$ was an arbitrary point of that locus. Such neighbourhoods make it open in $Z$. AC is inherited through [F1]–[F4]; the principal-open selections are finite at each point. [F1, F2, F3, F4, step 1.1, step 4.1] ∎
