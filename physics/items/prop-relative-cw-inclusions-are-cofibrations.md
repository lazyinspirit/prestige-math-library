---
id: prop-relative-cw-inclusions-are-cofibrations
kind: proposition
title: Relative CW inclusions are cofibrations
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-skeleta-cw-subcomplex-and-relative-cw-complex, def-cw-complex-with-closure-finiteness-and-weak-topology, def-cell-attachment-by-a-characteristic-map, def-quotient-topology, thm-the-exponential-law, def-compact-open-topology, def-locally-compact-metric-space, thm-heine-borel-rn, thm-compactness-agrees-with-metric-compactness, thm-closed-subspace-of-a-compact-space-is-compact, thm-compact-subset-of-a-hausdorff-space-is-closed, lem-continuity-is-local-and-pastes, lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric, thm-recursion]
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: Codex
    verdict: certify
    date: 2026-09-10
    scope: "Owner-authorized local general-CW HEP repair; direct supplier interfaces and local checks only, not independent review"
    delegated_by: owner
sources:
  references:
    - title: Allen Hatcher, Algebraic Topology, Proposition 0.16
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
---

## Statement

If $(X,A)$ is a relative CW complex, then $A\hookrightarrow X$ has the homotopy extension property; in particular it is a cofibration.

Explicitly, for every topological space $Y$, continuous $g:X\to Y$, and continuous $H:A\times I\to Y$ satisfying $H(a,0)=g(a)$, there is a continuous $\widetilde H:X\times I\to Y$ restricting to $H$ on $A\times I$ and to $g$ at time zero. Here $I=[0,1]$ and products have their ordinary product topologies. There is no finiteness or dimension bound on the CW complex, no separation hypothesis on $Y$, and no choice assumption. The CW structure, including its characteristic maps, is supplied as data.

## Facts & Assumptions

**Given:** A map $g:X\to Y$ and a homotopy $H:A\times I\to Y$ with $H(a,0)=g(a)$.

[L1] The skeleta $X^n$ are obtained by attachment quotients, $X$ is Hausdorff with the weak topology on its closed cells, and $A$ is a union of cells containing the closure of each of its cells ([[def-skeleta-cw-subcomplex-and-relative-cw-complex]], [[def-cw-complex-with-closure-finiteness-and-weak-topology]], [[def-cell-attachment-by-a-characteristic-map]]).

[L2] The interval $I$ and the closed disks $D^n$ are compact: use Heine–Borel and the agreement of metric and topological compactness; $D^0$ is a singleton. In particular $I$ is a locally compact metric space ([[thm-heine-borel-rn]], [[thm-compactness-agrees-with-metric-compactness]], [[def-locally-compact-metric-space]]).

[L3] Write $P=C(I,Y)$ with the compact-open topology. For every topological space $Z$, a function $h:Z\times I\to Y$ is continuous exactly when its transpose $\widehat h:Z\to P$, $\widehat h(z)(t)=h(z,t)$, is well defined and continuous. This is the published exponential law, with metric domain $I$, after interchanging the product coordinates ([[def-compact-open-topology]], [[thm-the-exponential-law]]).

[L4] For a quotient map $q:E\to B$, a subset of $B$ is open, or closed, exactly when its inverse image under $q$ is so ([[def-quotient-topology]]). Composites are continuous and continuous maps paste on a finite closed cover ([[lem-continuity-is-local-and-pastes]]).

[L5] Closed subspaces of compact spaces are compact, and compact subsets of a Hausdorff space are closed ([[thm-closed-subspace-of-a-compact-space-is-compact]], [[thm-compact-subset-of-a-hausdorff-space-is-closed]]). The Euclidean norm is continuous ([[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]]).

[L6] A specified successor operation can be iterated on the natural numbers without any choice principle ([[thm-recursion]]).

## Proof

**Proof technique:** direct.

1.1 First establish the needed quotient-cylinder mapping criterion. Let $q:E\to B$ be any quotient map and let $h:B\times I\to Y$ be a function such that $h\circ(q\times\mathrm{id}_I)$ is continuous. For each $b$, surjectivity supplies a representative $e$ and shows that the path $t\mapsto h(b,t)$ is continuous. No simultaneous selection of representatives is needed. The continuous transpose upstairs is $\widehat h\circ q:E\to P$. For every open $V\subseteq P$, its inverse image is $q^{-1}[\widehat h^{-1}[V]]$, so the quotient criterion makes $\widehat h^{-1}[V]$ open. Thus $\widehat h$ and then $h$ are continuous. No closedness hypothesis on $q$ is used. [L3, L4]

1.2 For $n\geq1$, put $T_n=(D^n\times\{0\})\cup(S^{n-1}\times I)$. For $u\in D^n$ and $t\in I$, define $a=\max\{1-t/2,\|u\|\}$, $\lambda=1/a$, and $r_n(u,t)=(\lambda u,2+\lambda(t-2))$. Since $1/2\leq a\leq1$, this formula is continuous and defined on the entire cylinder. Moreover $1\leq\lambda\leq2/(2-t)$, so its height lies in $[0,t]$, and $\lambda\|u\|\leq1$. If $a=1-t/2$ the height is zero, while if $a=\|u\|$ the norm of the first coordinate is one; hence the image lies in $T_n$. If $t=0$ or $\|u\|=1$, then $a=1$ and the point is fixed. Thus $r_n$ is a retraction onto $T_n$. For $n=0$ set $r_0(*,t)=(*,0)$. [L5, algebra, construct]

1.3 We specify compatible continuous maps $H_n:X^n\times I\to Y$, with $H_n(x,0)=g(x)$ and $H_n=H$ on $(A\cap X^n)\times I$. On the discrete zero skeleton prescribe $H_0(v,t)=H(v,t)$ for $v\in A$ and $H_0(v,t)=g(v)$ otherwise. Every vertex cylinder is open, so this is continuous. [given, L1, construct]

1.4 We justify the infinite-stage continuity using the weak topology on $X$, not an assumed weak topology on $X\times I$. Each characteristic map $\phi:D^n\to\overline e$ is a quotient map. Indeed it is a continuous surjection; if $F\subseteq D^n$ is closed, it is compact. Its image is compact by pulling any open cover of $\phi[F]$ back to $F$ and retaining the images' finitely many covering members. This open-cover argument works for arbitrary targets, without a metrizability hypothesis on $\overline e$. Since $\overline e$ is a subspace of the Hausdorff space $X$, $\phi[F]$ is closed there. Thus $\phi$ is closed; if $\phi^{-1}[C]$ is closed, then $C=\phi[\phi^{-1}[C]]$ is closed, proving the quotient criterion. [L1, L2, L4, L5]

2.1 Given such $H_{n-1}$ for $n\geq1$, let $\phi_\alpha:D^n\to X^n$ be a supplied characteristic map and $f_\alpha:S^{n-1}\to X^{n-1}$ its boundary map. If its open cell belongs to $A$, use $K_\alpha(u,t)=H(\phi_\alpha(u),t)$; this is defined on the whole disk cylinder because the closed cell lies in $A$. For every other cell define $b_\alpha:T_n\to Y$ by $b_\alpha(u,0)=g(\phi_\alpha(u))$ and $b_\alpha(u,t)=H_{n-1}(f_\alpha(u),t)$ for $u\in S^{n-1}$. These two continuous prescriptions agree on the corner and their domains form a two-piece closed cover of $T_n$, so $b_\alpha$ is continuous. Set $K_\alpha=b_\alpha\circ r_n$. [given, L1, L4, step 1.2, step 1.3]

3.1 The maps $H_{n-1}$ and all $K_\alpha$ agree on the attaching identifications, including for cells belonging to $A$, and so determine a function $H_n:X^n\times I\to Y$. The map from $(X^{n-1}\sqcup\coprod_\alpha D^n)\times I$ is continuous: each summand cylinder is open and carries the prescribed continuous map. The attachment map $X^{n-1}\sqcup\coprod_\alpha D^n\to X^n$ is quotient, so step 1.1 proves continuity of $H_n$. Its time-zero values are $g$, it extends $H_{n-1}$, and it equals $H$ on $(A\cap X^n)\times I$, since every cell of this intersection is either in the previous skeleton or among the cells on which $K_\alpha$ was prescribed from $H$. [L1, step 1.1, step 2.1]

4.1 These formulas define the successor map uniquely from the preceding stage; they do not choose one extension from a nonempty set of extensions. Apply ordinary recursion, recording the stage number together with the partial map, to obtain all $H_n$. The state space can be taken to be the set of valid stage-number/partial-map pairs, with the successor just constructed. Define $\widetilde H(x,t)=H_n(x,t)$ whenever $x\in X^n$. Compatibility makes this independent of $n$, gives $\widetilde H(x,0)=g(x)$, and gives $\widetilde H|_{A\times I}=H$. [L6, step 1.3, step 3.1]

5.1 Every path $t\mapsto\widetilde H(x,t)$ is continuous by some $H_n$, so the transpose $G:X\to P$ is well defined. For each characteristic map $\phi:D^n\to X$, the map $\widetilde H\circ(\phi\times\mathrm{id}_I)$ is continuous by construction, and [L3] makes $G\circ\phi$ continuous. By the quotient property from step 1.4, $G|_{\overline e}$ is continuous. Consequently, for every closed $C\subseteq P$, the set $G^{-1}[C]$ meets every closed cell in a relatively closed set. The CW weak topology implies $G^{-1}[C]$ is closed in $X$. Thus $G$ is continuous. This argument permits arbitrary families of cells and unbounded dimension. [L1, L3, L4, step 4.1, step 1.4]

6.1 The exponential law applied once more, now to $G:X\to P$, proves that $\widetilde H:X\times I\to Y$ is continuous. Its restrictions established in step 4.1 solve every homotopy-extension problem in the statement, which is the asserted cofibration property. [L3, step 4.1, step 5.1] ∎
