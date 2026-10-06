---
id: lem-setting-a-to-zero-in-a-closed-kr-factorization-gives-the-wide-edge-koszul-complex
kind: lemma
title: "Setting a to zero in a closed KR factorization gives the layer-by-layer Koszul complex"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps: [def-unreduced-type-a-soergel-bimodules-and-the-trivial-polynomial-factor, def-factorization-of-a-marked-moy-graph, def-arc-and-wide-edge-khovanov-rozansky-factorizations, def-bigraded-matrix-factorization-with-potential, def-koszul-complex-of-a-sequence-with-coefficients, lem-koszul-complex-concatenation-tensor-isomorphism]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Mikhail Khovanov, Triply-graded link homology and Hochschild homology of Soergel bimodules, arXiv:math/0510265v3; 'Sketch of proof', printed pp. 7-8"
      url: "https://arxiv.org/pdf/math/0510265"
    - title: "Mikhail Khovanov and Lev Rozansky, Matrix factorizations and link homology II, arXiv:math/0505056v2; section 1, formulas (2)-(4) and the passage setting a=0"
      url: "https://arxiv.org/pdf/math/0505056v2"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Let $D$ be a closed marked MOY resolution with $r$ wide edges and $m$ strands,
carrying marks $(i,j)$ with $0\le i\le r$, $1\le j\le m$, as in Khovanov's
figure 4: for each layer $1\le i\le r$ the $i$-th wide edge occupies two
adjacent positions $s,s+1$, and the variables $x_{i,j}$ label the marks. Let
$C(D)$ be the factorization of [[def-factorization-of-a-marked-moy-graph]]
built from the arc and wide-edge factorizations of
[[def-arc-and-wide-edge-khovanov-rozansky-factorizations]] over the shared
polynomial ring $\widetilde R:=\mathbb Q[a,\,x_{i,j}:0\le i\le r,\,1\le j\le m]$
(the internal marks are retained as coefficients), with potential
$w_D=a\sum_{p}\epsilon_px_p$ over the boundary points; for a closed graph
$w_D=0$ and $C(D)$ is a genuine complex of graded free $\widetilde R$-modules.

Write $S:=\widetilde R/(a)=\mathbb Q[x_{i,j}]$ and form, in $S$, the
$(r+1)m$-element sequence
$$\beta_i=x_{i,s}+x_{i,s+1}-x_{i-1,s}-x_{i-1,s+1},\qquad \gamma_i=x_{i,s}x_{i,s+1}-x_{i-1,s}x_{i-1,s+1}\quad(1\le i\le r),$$
the differences $x_{i,j}-x_{i-1,j}$ for the positions $j\notin\{s,s+1\}$,
and the closure differences $x_{0,j}-x_{r,j}$ $(1\le j\le m)$; let $K(D)$ be
the Koszul complex of this sequence over $S$
([[def-koszul-complex-of-a-sequence-with-coefficients]]). Then:

(a) the specialization $C(D)|_{a=0}:=C(D)\otimes_{\mathbb Q[a]}\mathbb Q$ is a
complex ($d^2=0$) of graded free $S$-modules;

(b) $C(D)|_{a=0}$ is isomorphic, as a $\mathbb Z/2$-graded complex of graded
$S$-modules (a factorization with $d^2=0$), to the **folding by parity** of
$K(D)$: the even part is $\bigoplus_{p\ \mathrm{even}}K(D)_p$ and the odd part
is $\bigoplus_{p\ \mathrm{odd}}K(D)_p$, with the Koszul differential, up to a
global sign on the odd part that is absorbed by a change of basis;

(c) the isomorphism carries the bidegree shifts of the arc and wide-edge
factorizations: a linear relation $x_{i,j}-x_{i-1,j}$ or $\beta_i$ occupies a
term of bidegree $(-1,1)$ and a quadratic relation $\gamma_i$ a term of
bidegree $(-1,3)$, so that every differential has bidegree $(1,1)$ for
$\deg a=(2,0)$, $\deg x_{i,j}=(0,2)$ and the library shift convention
$(M\{r_1,r_2\})_{(k,l)}=M_{(k-r_1,l-r_2)}$.

## Facts & Assumptions

**Given:** a closed marked MOY resolution $D$ with $r$ wide edges and $m$
strands, marks $(i,j)$, positions $s$ of the wide edges, the shared ring
$\widetilde R$, the factorization $C(D)$ and the sequence and Koszul complex
of the statement.

[L1] A bigraded matrix factorization with potential $w$ over
$\widetilde R$ consists of free bigraded modules and differentials of
bidegree $(1,1)$ with $d^2=w\cdot\mathrm{id}$; on the closed graph the
potential is $w_D=a\sum_p\epsilon_px_p$, and setting $a=0$ makes $d^2=0$ and
kills exactly the $a$-linear matrix entries
([[def-bigraded-matrix-factorization-with-potential]]).

[L2] The arc factorization of an arc with endpoint labels $x_1,x_2$ is
$C_c=[S\xrightarrow{a}S\{-1,1\}\xrightarrow{x_1-x_2}S]$, the two-term row
$(a,\,x_1-x_2)$: its even part is $S$ in bidegree $(0,0)$, its odd part is
$S\{-1,1\}$, the map even-to-odd is multiplication by $a$ and the map
odd-to-even is multiplication by $x_1-x_2$. The wide-edge factorization of a
wide edge with four labels $x_1,x_2,x_3,x_4$ is the tensor product of the rows
$(a,\,x_1+x_2-x_3-x_4)$ and $(0,\,x_1x_2-x_3x_4)$, with middle terms
$S\{-1,1\}\oplus S\{-1,3\}$
([[def-arc-and-wide-edge-khovanov-rozansky-factorizations]]).

[L3] $C(D)=\bigotimes_cC_c\otimes\bigotimes_tC_t$ is the tensor product over
the shared variables of the local arc and wide-edge factorizations, its
potential is the sum of the local potentials, and for a closed graph
$w_D=0$, so $C(D)$ is a genuine complex of graded $\widetilde R$-modules
([[def-factorization-of-a-marked-moy-graph]]).

[L4] For a sequence $f_1,\dots,f_N$ in a commutative ring $S$ the Koszul
complex $K(f_1,\dots,f_N;S)$ has degree-$p$ term $\bigwedge^pS^N$ and
differential $d(e_{i_1}\wedge\cdots\wedge e_{i_p})=\sum_t(-1)^{t-1}e_{i_1}\wedge\cdots\widehat{e_{i_t}}\cdots\wedge e_{i_p}\otimes f_{i_t}$;
its degree-zero term is $S$ with differential zero
([[def-koszul-complex-of-a-sequence-with-coefficients]]).

[L5] For finite sequences $\mathbf x,\mathbf y$ there is a signed chain
isomorphism $K(\mathbf x,\mathbf y;S)\cong K(\mathbf x;S)\otimes_SK(\mathbf y;S)$
([[lem-koszul-complex-concatenation-tensor-isomorphism]]).



## Proof

**Proof technique:** direct.

1.1 Specialize $a=0$. By [L1] each local factorization has $d^2=a\cdot(\text{linear form})\cdot\mathrm{id}$ and setting $a=0$ makes $d^2=0$ and kills the $a$-linear entries. By [L2] the arc row $(a,\,x_1-x_2)$ becomes the $\mathbb Z/2$-graded complex with even part $S$, odd part $S\{-1,1\}$, even-to-odd map $0$ and odd-to-even map $x_1-x_2$; the wide-edge tensor of rows $(a,\,\beta)$ and $(0,\,\gamma)$ becomes the tensor product of the two rows $(0,\beta)$ and $(0,\gamma)$. [L1, L2, given, algebra]

1.2 Identify each local $a=0$ complex with the folding of the Koszul complex of its relations. The arc of labels $x_1,x_2$ gives, with $f=x_1-x_2$, the folding of $K(f;S)$: $K_1=S\{-1,1\}\xrightarrow{f}K_0=S$ has even part $S$ and odd part $S\{-1,1\}$ with the same maps. The wide edge gives the folding of $K(\beta,\gamma;S)$: place the Koszul symbols for $\beta$ and $\gamma$ in the shifted bidegrees $(-1,1)$ and $(-1,3)$, so that $K_0=S$, $K_1=S\{-1,1\}\oplus S\{-1,3\}$, $K_2=S\{-2,4\}$ and every differential has bidegree $(1,1)$; the tensor product of the two rows $(0,\beta),(0,\gamma)$ has even part $S\oplus S\{-2,4\}$, odd part $S\{-1,1\}\oplus S\{-1,3\}$ and differentials matching those of $K(\beta,\gamma)$ up to a global sign on the odd part. [L2, L4, given, algebra]

2.1 Tensor over the layers. The $a=0$ specialization of a tensor product of factorizations is the tensor product of the $a=0$ specializations, because the product differential is the sum over the factors of the local differentials tensored with the other factors; the Koszul signs on the product are the Koszul signs of the total complex. By 1.2 the result is the tensor product of the foldings of the local Koszul complexes, which is the folding of the tensor product of those Koszul complexes. [L1, L3, step 1.2, algebra]

3.1 Apply Koszul concatenation. Take the local relations in the layer order, at layer $i$ first the two wide-edge relations $\beta_i,\gamma_i$ and then the differences $x_{i,j}-x_{i-1,j}$ for $j\notin\{s,s+1\}$, and put the closure differences last. By [L5] the tensor product of the local Koszul complexes over the shared polynomial ring is isomorphic, with Koszul signs, to the Koszul complex of the concatenated sequence, which is $K(D)$. Combining with step 2.1 gives an isomorphism of $\mathbb Z/2$-graded $S$-complexes from $C(D)|_{a=0}$ to the folding of $K(D)$, up to the global sign on the odd part that a change of basis absorbs. [L4, L5, step 2.1, algebra]

4.1 Read off the shifts and the closure hypothesis. In the arc row the odd generator $1\otimes 1$ of $S\{-1,1\}$ has bidegree $(-1,1)$, and in the wide edge the two odd generators have bidegrees $(-1,1)$ and $(-1,3)$, exactly the shifts displayed in [L2] for the middle terms; the differential $S\{-1,1\}\to S$ has bidegree $(1,1)$ because $x_1-x_2$ has bidegree $(0,2)$, and likewise $\gamma_i:S\{-1,3\}\to S$ has bidegree $(1,1)$ because $x_1x_2-x_3x_4$ has bidegree $(0,4)$. For the closed graph the potential vanishes by [L3] and there are no boundary points, so no boundary variable remains and the sequence has exactly $(r+1)m$ elements; the isomorphism of step 3.1 is therefore an identification of the $a=0$ specialization of $C(D)$ with the folding of $K(D)$, carrying the displayed shifts. [L1, L2, L3, step 3.1, algebra] ∎ 