---
id: lem-a1-arbitrary-framing-cotangent-hecke-model
kind: lemma
title: "Arbitrary-framing A1 varieties and their conormal Hecke correspondence"
status: draft
dependency_level: 1
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - def-axiom-of-choice
  - def-a1-nakajima-framed-quiver-data
  - def-grassmannian-subspaces
  - lem-grassmannian-standard-affine-charts
  - cor-grassmannian-smooth-irreducible-dimension
  - thm-projective-bundle-represents-line-quotients
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Hiraku Nakajima, Introduction to quiver varieties—for ring and representation theorists"
      url: "https://arxiv.org/pdf/1611.10000v1"
      locator: "Example 10 and §§4.2–4.5; local A1 proofs below supply the geometry and intersection calculations"
    - title: "The Stacks Project, Chow Homology and Chern Classes"
      url: "https://stacks.math.columbia.edu/download/chow.pdf"
      locator: "Sections 42.36–42.44 and 42.53–42.59; the proved local Chow suppliers are explicit dependencies"
---

## Statement

Assume the Axiom of Choice. Fix $W=\mathbb C^w$, $w\ge0$, and the no-arrow
one-vertex quiver. For $0\le v\le w$, stable data are
$I:W\to V$, $J:V\to W$, $\dim V=v$, with $IJ=0$ and $J$ injective;
$g\in\operatorname{GL}(V)$ acts by $(gI,Jg^{-1})$. This extends the
$w=1$ convention in [[def-a1-nakajima-framed-quiver-data]]. The algebraic
orbit space is
$$M_v=T^*X_v=\{(S,A):S\in X_v=\operatorname{Gr}(v,W),\ \operatorname{im}A\subseteq S\subseteq\ker A\},$$
under $S=\operatorname{im}J$, $A=JI$. Put $a_v=v(w-v)$, so
$\dim X_v=a_v$, $\dim M_v=2a_v$. The map
$\mu_v:M_v\to\operatorname{End}(W)$, $(S,A)\mapsto A$, is projective;
its zero fiber $L_v=X_v$ is the zero section.

For $0\le v<w$, put $Y_v=\operatorname{Fl}(v,v+1;W)$ and write
$q:Y_v\to X_v$, $r:Y_v\to X_{v+1}$. The framed subdatum Hecke locus is
$$Z_v=\{(S\subset T,A):\operatorname{im}A\subseteq S,\ T\subseteq\ker A\} =\operatorname{Tot}\mathcal K_v,\qquad \mathcal K_v=\operatorname{Hom}(W/\mathcal T,\mathcal S).$$
Its image in $M_v\times M_{v+1}$ uses the same $A$ in both factors.
It is the conormal bundle to $Y_v\subset X_v\times X_{v+1}$ after applying
fiberwise negation in the second cotangent factor. Both projections are
projective, $\dim Z_v=a_v+a_{v+1}$, and
$Z_v\cap\operatorname{pr}_1^{-1}(L_v)=Y_v
=Z_v\cap\operatorname{pr}_2^{-1}(L_{v+1})$ scheme-theoretically.
All these constructions are $\operatorname{GL}(W)$-equivariant.

## Facts & Assumptions

**Given:** The vector spaces, stable data, group actions and incidence spaces
in the statement, over $\mathbb C$.

[F1] Grassmannian charts are graphs of maps $S\to W/S$, so their tangent
bundle is $\operatorname{Hom}(\mathcal S,W/\mathcal S)$; Grassmannians are
smooth irreducible projective of dimension $v(w-v)$
([[def-grassmannian-subspaces]], [[lem-grassmannian-standard-affine-charts]],
[[cor-grassmannian-smooth-irreducible-dimension]]).

[F2] The quotient projective bundle represents line quotients
([[thm-projective-bundle-represents-line-quotients]]).

## Proof

1.1 Stability and $IJ=0$ give $S=\operatorname{im}J$ of dimension $v$ and $A=JI$ with image in $S$ and $A|_S=0$. Conversely such $(S,A)$ and a frame $j:V\xrightarrow{\sim}S$ give $J=j$ followed by inclusion and $I=j^{-1}A$. These constructions are inverse and algebraic on the graph charts [F1]; changing the frame is exactly the free $\operatorname{GL}(V)$ action. The stable locus is therefore the frame bundle over the displayed vector bundle, proving the algebraic geometric quotient claim, without an appeal to an unspecified GIT quotient. Trace identifies the dual of $\operatorname{Hom}(S,W/S)$ with $\operatorname{Hom}(W/S,S)$, yielding $M_v=T^*X_v$. [F1, given, algebra]

2.1 The incidence equations $A(W)\subseteq S$, $A(S)=0$ cut out a closed subscheme of $X_v\times\operatorname{End}(W)$. Projection from this product is projective, hence so is $\mu_v$. Its fiber at $0$ is the zero section scheme, and $A^2=0$ everywhere. This agrees with the zero fiber of the affine invariant quotient of the framed data if that quotient is also used: its invariant functions include all entries of $JI$, so the zero fiber forces $A=0$; conversely at $I=0$ the orbit closure under $g=t^{-1}\operatorname{id}_V$ contains the zero datum as $t\to0$, so every invariant function has its zero-datum value. Thus no assertion identifying the entire affine invariant ring is needed. [F1, step 1.1, algebra]

2.2 A framed inclusion $V\hookrightarrow V^+$ requires $I^+=\xi I$ and $J=J^+\xi$, with the identity on $W$. In the quotient model it is exactly $S\subset T$ and a common $A$ satisfying $A(W)\subset S$, $A(T)=0$; conversely these conditions reconstruct the inclusion and its unframed one-dimensional quotient. They describe the vector bundle $\mathcal K_v$ of rank $k=v(w-v-1)$ on $Y_v$. The map $r$ is the quotient projective bundle of the tautological rank-$(v+1)$ bundle on $X_{v+1}$, with fiber $\mathbb P^v$; $q$ is the bundle of lines in $W/\mathcal S$, with fiber $\mathbb P^{w-v-1}$. Hence $\dim Y_v=a_{v+1}+v=a_v+w-v-1$ and $\dim Z_v=\dim Y_v+k=a_v+a_{v+1}$. [F1, F2, step 1.1, algebra]

3.1 A tangent vector to the flag incidence is induced by some $\xi\in\operatorname{End}(W)$, since adapted bases identify the incidence with a transitive $\operatorname{GL}(W)$ orbit. Cotangent vectors $(A_1,A_2)$ annihilate every such tangent vector exactly when $\operatorname{tr}((A_1+A_2)\xi)=0$ for all $\xi$, that is $A_2=-A_1$. Together with the two cotangent conditions this says $\operatorname{im}A_1\subset S$, $A_1(T)=0$. This identifies the conormal fibers, with the asserted sign in the second factor, and the same linear equations identify vector bundles on every chart. In particular $Z_v$ is smooth and closed in the product. For the first projection, $Z_v$ is a closed subvariety of $M_v\times X_{v+1}$ cut out by $S\subset T\subset\ker A$; for the second it is closed in $X_v\times M_{v+1}$ cut out by $\operatorname{im}A\subset S\subset T$. Both are projective projections. Setting either source or target $A$ to zero cuts all fiber coordinates of $\mathcal K_v$, so both inverse images of zero sections are exactly $Y_v$ with its reduced zero-section scheme structure. [F1, step 2.2, algebra]

4.1 An element $h\in\operatorname{GL}(W)$ acts on data by $(I,J)\mapsto(Ih^{-1},hJ)$ and on the quotient by $(S,A)\mapsto(hS,hAh^{-1})$. It acts on flags and on $\operatorname{Hom}(W/T,S)$ by the same transport. The frame quotient, trace pairing, incidence equations and all projections commute with these actions. This proves the equivariance assertions, including the conormal sign identification. The inherited Axiom of Choice supplies bases; the actual chart computations use only finite-dimensional choices. [F1, step 1.1, step 3.1, algebra] ∎

