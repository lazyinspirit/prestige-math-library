---
id: "lem-cw-quotients-and-collapse-of-a-contractible-subcomplex"
kind: "lemma"
title: "CW quotients and collapse of a contractible subcomplex"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["lem-cellular-attachments-with-finite-boundary-support-form-a-cw-complex","def-skeleta-cw-subcomplex-and-relative-cw-complex","prop-relative-cw-inclusions-are-cofibrations","thm-quotient-universal-property","lem-interval-exponential-law-and-quotient-homotopies","prop-higher-homotopy-basepoint-transport-and-moving-homotopies","def-weak-homotopy-equivalence"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Hatcher, Algebraic Topology, quotient CW construction Chapter0 pp8–10 and
        Proposition0.17 pp15–16; ordinary topology and basepoint details
        supplied here
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

Let $(X,A)$ be a CW pair with $A\ne\varnothing$ and supplied characteristic maps. The ordinary quotient $X/A$ is a CW complex, with one vertex $*$ replacing $A$ and one cell of the same dimension for every cell of $X\setminus A$.

If $A$ admits a contraction $H:A\times I\to A$, $H(-,0)=\mathrm{id}_A$, $H(-,1)=a\in A$, then the quotient map $q:X\to X/A$ is a homotopy equivalence and a weak homotopy equivalence. If $H(a,t)=a$ for every $t$, the constructed inverse and inverse homotopies are based at $a$ and $*$. No choice principle is required; a contraction is one witness, not a family of selected contractions.

## Facts & Assumptions

[F1] [[lem-cellular-attachments-with-finite-boundary-support-form-a-cw-complex]] constructs CW spaces by supplied ascending-dimensional attachments with cellular finite-support boundaries, and gives the characteristic-disk map-out criterion. [[def-skeleta-cw-subcomplex-and-relative-cw-complex]] specifies the relative cells and their boundaries.

[F2] [[prop-relative-cw-inclusions-are-cofibrations]] extends a prescribed homotopy from a CW subcomplex with arbitrary target, without choice.

[F3] [[thm-quotient-universal-property]] gives descent through ordinary quotient maps. [[lem-interval-exponential-law-and-quotient-homotopies]] makes their products with $I$ quotient, so compatible homotopies descend jointly.

[F4] [[prop-higher-homotopy-basepoint-transport-and-moving-homotopies]] gives $f_*=\beta_\gamma g_*$ for a homotopy from $f$ to $g$ with basepoint track $\gamma$. Its radial-shell formula is natural under postcomposition. [[def-weak-homotopy-equivalence]] also requires component bijectivity.

## Proof

**Given:** The CW pair, and, for the homotopy-equivalence assertions, the specified contraction of $A$ to $a$.

1.1 Start with the discrete vertex set consisting of $*$ and the vertices of $X\setminus A$. For each positive dimension attach the characteristic disks of the corresponding cells of $X\setminus A$, composing their original boundary maps with the collapse already constructed on $A$ and the lower-dimensional cells. This composition is continuous by induction on dimension. The boundaries are cellular and have finite support: a closed cell of $X$ has finite support by its supplied CW structure, and collapsing its portion in $A$ replaces that portion by at most the one vertex $*$. Thus [F1] gives a CW complex $Q$ with precisely the asserted cells. Points of the open cells outside $A$ are not identified with one another or with $*$, so its underlying set is exactly the set $X/A$. [F1, given]

2.1 This CW topology is the ordinary quotient topology. A function $h:X/A\to T$ is continuous for the ordinary quotient exactly when $hq:X\to T$ is continuous, by [F3]. By the characteristic-disk test [F1], the latter means continuity on each characteristic disk of $X$. Disks belonging to $A$ map constantly to $h(*)$; the other tests are precisely the characteristic disks used to construct $Q$. Hence the map-out tests agree for every target $T$. Taking $T$ to be the two-point space with open sets $\varnothing,\{1\},\{0,1\}$, the characteristic map of a subset is continuous exactly when that subset is open. Therefore the two topologies agree. In particular $X/A$ is Hausdorff and CW with the displayed quotient characteristic maps; no separation of an arbitrary quotient was assumed in advance. [F1, F3, step 1.1]

3.1 Extend $H$, viewed in $X$, by [F2] from the initial map $\mathrm{id}_X$ to a homotopy $F:X\times I\to X$ with $F(x,0)=x$ and $F|_{A\times I}=H$. Thus $F(-,1)$ is constant at $a$ on $A$ and factors continuously as $gq$ for $g:X/A\to X$ by [F3]. For every $t$, the map $qF(-,t)$ is constant at $*$ on $A$, since $H$ stays in $A$. Consequently the jointly continuous map $qF$ descends through $q\times\mathrm{id}_I$ to a continuous $\overline F:(X/A)\times I\to X/A$ by [F3]. It starts at the identity and ends at $qg$: the endpoint equality follows after composition with the surjective $q$. We have proved $\mathrm{id}_X\simeq gq$ and $\mathrm{id}_{X/A}\simeq qg$, with the exact identity $\overline F(qx,t)=qF(x,t)$. [F2, F3, step 2.1]

4.1 These homotopies make the induced component functions of $g$ and $q$ inverse, because each point is joined to its image under the corresponding composite. For positive degree at any $x\in X$, put $y=q(x)$ and $\alpha(t)=F(x,t)$, a path from $x$ to $g(y)$. The track of $\overline F$ at $y$ is $q\alpha$. Define $$L=\beta_\alpha g_*:\pi_j(X/A,y)\longrightarrow\pi_j(X,x),\qquad j\ge1.$$ By [F4] applied to $F$, $Lq_* =\mathrm{id}$. The radial-shell formula in [F4] gives $q_*\beta_\alpha=\beta_{q\alpha}q_*$, where the right-hand $q_*$ is based at $g(y)$. Thus $q_*L=\beta_{q\alpha}q_*g_*=\mathrm{id}$ by [F4] applied to $\overline F$. Hence $q_*$ is an isomorphism at every basepoint, proving weak equivalence without a based-contraction assumption. [F4, step 3.1]

5.1 If $H$ fixes $a$, then $F(a,t)=a$ by its prescribed restriction, $g(*)=a$, and $\overline F(*,t)=*$ already holds by construction. Thus both maps and homotopies are based as asserted. If $A=X$, the quotient CW consists only of $*$, and the same contraction gives the claimed equivalence. If $A$ is a singleton, the quotient identifies no distinct points and the identity contraction is available. Empty $A$ is excluded because the displayed collapse has a specified quotient vertex; no empty-set contraction is postulated. Zero-dimensional relative cells are retained as separate vertices, higher-dimensional cells retain their supplied attaching identifications, and no regularity of those maps was used. Only the one given contraction and the specified choice-free HEP construction enter steps 3.1–4.1. This proves all assertions without AC. [F1, F2, F3, F4, step 1.1, step 2.1, step 3.1, step 4.1] ∎
