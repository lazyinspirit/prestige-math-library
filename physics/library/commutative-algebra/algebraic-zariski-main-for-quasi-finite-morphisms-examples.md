---
page: algebraic-zariski-main-for-quasi-finite-morphisms-examples
title: "Algebraic Zariski Main for Quasi-Finite Morphisms: Examples"
status: published
requires: [algebraic-zariski-main-for-quasi-finite-morphisms, fibre-products-base-change-and-scheme-theoretic-fibres]
items: []
examples: [ex-zariski-main-open-immersion-punctured-affine-line,
           ex-zariski-main-finite-morphism-factorization,
           cex-quasi-finite-morphism-need-not-be-finite]
---

These three items show the range of the companion page's two main theorems on
explicit coordinate rings, and where quasi-finiteness stops.

The first is the open immersion $R=k[t]\to k[t,t^{-1}]=R_t$: its fibre over the
prime $(t)$ is empty, in the sharp form $S\otimes_R\kappa((t))=0$, while over
every prime avoiding $t$ the fibre ring is the residue field itself, and the
single element $g=t$ of the finite algebra $T=R$ already produces the theorem's
configuration with $T_t=S=S_t$. The second takes a module-finite algebra: the
relative integral closure of the image of $R$ is all of $S$, the local form of
Zariski's main theorem holds with the element $g=1$ at every prime, and the
finite factorization is the identity with $T=S$ and the single principal open
$D_T(1)=\operatorname{Spec}(T)$ — the extremal case in which nothing has to be
inverted.

The third item is a counterexample, and is the reason the theorems are stated
with an open piece rather than with finiteness: for $R=k[t]$ and
$S=R\times R[t^{-1}]$ with the diagonal structure, the map is finite type and
quasi-finite, with fibres $k$ over $(t)$ and $\kappa(\mathfrak p)\times\kappa(\mathfrak p)$
over every other prime, yet $S$ is not a finite $R$-module — otherwise $u=(0,t^{-1})\in S=R[u]$
would be integral over $R$, and multiplying its monic equation by a power of
$t$ would give $1\in(t)$. Here the relative integral closure is the finite
algebra $R\times R$, contained properly in $S$, and the single element
$g=(1,t)$ of it satisfies $(R\times R)_g=S_g=S$ with open image
$D(g)=\operatorname{Spec}(R)\sqcup D(t)$ in $\operatorname{Spec}(R\times R)$.
All three computations are explicit and choice-free; the Axiom of Choice is
recorded in each statement only because the general theorems they illustrate
assume it.
