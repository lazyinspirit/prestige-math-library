---
id: "lem-relative-homotopy-exact-sequence-of-a-triple-in-group-degrees"
kind: "lemma"
title: "Relative homotopy exact sequence of a triple in group degrees"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["def-relative-homotopy-group","lem-relative-homotopy-operations-are-well-defined-in-their-valid-degrees","lem-relative-cubical-disk-model-and-compression","thm-long-exact-sequence-of-relative-homotopy-groups"]
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: May, A Concise Course, Chapter11 §3 p86, triple sequence; Hatcher
        Theorem4.23 Case3 p363. Complete group-degree proof supplied locally.
      url: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

Let $c\in A\subseteq B\subseteq X$, with subspace topologies. For $n\ge2$ the sequence
$$\pi_{n+1}(X,B,c)\xrightarrow{\delta}\pi_n(B,A,c)\xrightarrow{s}\pi_n(X,A,c)\xrightarrow{t}\pi_n(X,B,c)\xrightarrow{\delta}\pi_{n-1}(B,A,c)$$
is natural in based maps of triples and exact at its three middle terms. Here $s,t$ are inclusion maps, and $\delta$ is the boundary for $(X,B)$ followed by the relative map for $(B,A)$. All arrows between displayed groups are homomorphisms. The last term when $n=2$ is a pointed set; exactness at the preceding term means inverse image of its distinguished point. No exactness after this pointed target and no relative degree-zero object are asserted. These statements hold without choice and without CW hypotheses.

## Facts & Assumptions

[F1] [[def-relative-homotopy-group]] fixes the cubical representative convention. [[lem-relative-homotopy-operations-are-well-defined-in-their-valid-degrees]] proves relative group laws for degrees at least two, and functoriality including the pointed degree-one boundary.

[F2] [[lem-relative-cubical-disk-model-and-compression]] says that a null relative class is represented by a disk compressible into the subspace through a homotopy fixed on its entire boundary. Its cubical and disk models identify the based sphere boundary used here.

[F3] [[thm-long-exact-sequence-of-relative-homotopy-groups]] supplies exactness and naturality of each pair sequence, including its group and pointed ranges.

## Proof

**Given:** The based triple and $n\ge2$. Write $j_B:\pi_n(B,c)\to\pi_n(B,A,c)$ and $j_X:\pi_n(X,c)\to\pi_n(X,A,c)$ for the relative maps, and use subscripts on inclusions to specify their spaces.

1.1 By [F1, F3], define $\delta=j_B\partial_{X,B}$, with the analogous degree-shifted formula at the last arrow. Inclusion and restriction to the distinguished cubical face commute with a based map of triples, so every square of these sequences commutes. In degrees with group structures these operations are homomorphisms. In particular the first arrow and $s,t$ are homomorphisms even when $n=2$; the last arrow then remains only pointed. [F1, F3, given]

2.1 We prove exactness at $\pi_n(B,A,c)$. The composite $s\delta$ is zero: an absolute boundary from $(X,B)$ dies in $\pi_n(X,c)$ by [F3], hence also in its relative group. Conversely let $z\in\pi_n(B,A,c)$ satisfy $s(z)=0$. Its boundary in $\pi_{n-1}(A,c)$ is zero by naturality, so [F3] gives $v\in\pi_n(B,c)$ with $j_B(v)=z$. Since $j_X(i_{BX}v)=s(z)=0$, the pair sequence for $(X,A)$ gives $u\in\pi_n(A,c)$ with $i_{AX}u=i_{BX}v$. Therefore $v-i_{AB}u$ is killed by $i_{BX}$, and the pair sequence for $(X,B)$ gives $w\in\pi_{n+1}(X,B,c)$ with $\partial_{X,B}w=v-i_{AB}u$. Applying $j_B$, whose composite with $i_{AB}$ is zero, yields $\delta w=z$. All subtractions here take place in absolute degree-$n$ groups and their homomorphic images, with $n\ge2$. [F1, F3, step 1.1]

2.2 At $\pi_n(X,A,c)$, an element represented by a cube in $B$ becomes null in $(X,B)$: increasing its last coordinate to one contracts it to $c$ while allowing its distinguished face to stay in $B$. Thus $ts=0$. Conversely if $z$ maps to zero under $t$, take its disk representative with boundary in $A\subseteq B$. Nullity in $(X,B)$ and [F2] compress this disk into $B$ while fixing its entire original boundary in $A$. The endpoint is a relative representative for $(B,A,c)$, and the compression is a homotopy of representatives for $(X,A,c)$ because it fixes that boundary and its marked point. This is an $s$-preimage of $z$. [F1, F2, step 1.1]

2.3 At $\pi_n(X,B,c)$, the boundary of a representative from $(X,A,c)$ lies entirely in $A$, so its relative class in $(B,A,c)$ is null by the same last-coordinate contraction; hence $\delta t=0$. Conversely represent $z$ by $f(u,r)$, with $u\in I^{n-1}$, $r\in I$, and bottom face $h(u)=f(u,0)$ a based cube in $B$. If $\delta z=0$, the relative class of $h$ in $(B,A,c)$ is null. By [F2], there is a homotopy $G(u,v)$ in $B$ from $h$ to a cube $h'$ entirely in $A$, fixed at $c$ on $\partial I^{n-1}$. This also applies when $n=2$, since it is nullity in pointed relative degree one with a full-boundary-fixed compression. [F1, F2, step 1.1]

3.1 Insert that homotopy as a bottom collar. For $0<\lambda\le1$ set $$f_\lambda(u,r)=\begin{cases}G(u,\lambda-2r),&0\le r\le\lambda/2,\\f\bigl(u,(r-\lambda/2)/(1-\lambda/2)\bigr),&\lambda/2\le r\le1,\end{cases}$$ and put $f_0=f$. The seam values both equal $h(u)$; the denominator is at least $1/2$. Joint continuity, including at $\lambda=0$, follows by closed pasting on the two closed regions $r\le\lambda/2$ and $r\ge\lambda/2$: the first formula is defined also at their common point $\lambda=r=0$, where it equals $G(u,0)=h(u)$, and the second formula there equals $f(u,0)$. Each bottom face stays in $B$, and all other faces stay at $c$. At $\lambda=1$ the bottom face is $h'\subseteq A$. Thus $f_1$ is a relative $(X,A,c)$ representative whose image under $t$ is $z$. This proves exactness at the third middle term. [F1, step 2.3]

4.1 Steps 2.1, 2.2 and 3.1 prove both image inclusions at all asserted terms. The statement does not require group operations on the final pointed set, exactness there, or any assertion about relative degree zero. A specified $c$ excludes an empty $A$, while equal spaces in the triple give zero relative groups and the same formulas. Constant representatives, zero classes and coincident inclusions retain the displayed endpoint and boundary values. Only finitely many witnesses for a single element were instantiated in each argument; no representative or compression was selected for a family of classes. Thus the entire natural exact segment is choice-free. [F1, F2, F3, step 1.1, step 2.1, step 2.2, step 3.1] ∎
