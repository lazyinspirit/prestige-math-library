---
id: cor-smooth-variety-classical-scheme-conventions-agree
kind: corollary
title: "Classical and scheme smoothness over a perfect field"
status: draft
origin: pipeline
deps:
  - def-smooth-morphism-to-field-classical
  - def-smooth-morphism-classical
  - thm-regular-equals-smooth-over-perfect-field
  - def-smooth-morphism-schemes
  - thm-jacobian-criterion-smooth-morphism
  - def-ag-standard-smooth-algebra
  - def-axiom-of-choice
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
    - title: "The Stacks Project, Morphisms of Schemes, Sections 29.25-29.37; Varieties, Section 33.12"
      url: https://stacks.math.columbia.edu/download/morphisms.pdf
    - title: "Ravi Vakil, The Rising Sea, 29 August 2022 public draft, Chapters 25-26"
      url: https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf
---

## Statement

Assume the Axiom of Choice (AC). Let $k$ be a field and let $X$ be a finite-type
$k$-scheme. Consider the three conditions

* (classical) $X\to\operatorname{Spec}k$ is smooth in the earlier
  local-standard-smooth convention
  ([[def-smooth-morphism-classical]], [[def-smooth-morphism-to-field-classical]]);
* (scheme) $X\to\operatorname{Spec}k$ is smooth in the scheme-theoretic sense of
  [[def-smooth-morphism-schemes]];
* (regular) every local ring $\mathcal O_{X,x}$ is a regular local ring.

1. Conditions (classical) and (scheme) are equivalent for every field $k$,
   closed points or not.
2. If moreover $k$ is perfect, then all three conditions are equivalent.
3. Consequently, for $k$ perfect, a classical smooth $k$-variety in the earlier
   convention (finite type over $k$, and irreducible or reduced if that
   convention so requires) has smooth structure morphism $X\to\operatorname{Spec}k$;
   conversely a reduced finite-type $k$-scheme with smooth structure morphism is
   classically smooth at every point and all its local rings are regular.
4. Irreducibility and connectedness are not consequences: the disjoint union of
   two copies of the affine line is finite type, reduced and scheme-smooth over
   $k$, but is neither irreducible nor connected. Those properties belong to the
   definition of "variety" and must be imposed separately.

No hypothesis of reducedness, irreducibility or separatedness is used in the
equivalences of clauses 1 and 2.

## Facts & Assumptions


**Given:** The data and hypotheses displayed in the Statement, with the conventions fixed there.

[F1] For a finite-type $k$-scheme $X$, smoothness of $X\to\operatorname{Spec}k$ in the earlier convention means the local-standard-smooth condition of [[def-smooth-morphism-classical]] at every point, and it is equivalent to the condition that for every field extension $K/k$ every local ring of the base change $X_K$ is regular ([[def-smooth-morphism-to-field-classical]]).

[F2] Assume AC. For $k$ perfect and $X$ a finite-type $k$-scheme, $X$ is regular (all local rings are regular local rings) if and only if $X\to\operatorname{Spec}k$ is smooth in the local-standard-smooth convention; no reducedness, irreducibility or closed-point restriction is imposed ([[thm-regular-equals-smooth-over-perfect-field]]).

[F3] A morphism $f:X\to S$ is smooth at $x$ exactly when it is locally of finite presentation at $x$, flat at $x$, and its scheme-theoretic fibre at $f(x)$ is geometrically regular at $x$ ([[def-smooth-morphism-schemes]]).

[F4] Assume AC. For $f:X\to S$ locally of finite presentation and $x\in X$, $f$ is smooth at $x$ if and only if there are affine open neighbourhoods $U=\operatorname{Spec}C$ of $x$ and $V=\operatorname{Spec}A$ of $f(x)$ with $f(U)\subseteq V$ and a presentation of $C_h$, for some $h\in C\smallsetminus\mathfrak q$, as $C_h\cong(A[t_1,\dots,t_m]/(f_1,\dots,f_r))_g$ in which some $r\times r$ minor of the Jacobian is a unit of $C_h$; such a chart is flat over $A$ with geometrically regular fibres ([[thm-jacobian-criterion-smooth-morphism]]).

[F5] A standard smooth presentation of an $R$-algebra $S$ is a presentation $S\cong(R[x_1,\dots,x_n]/(f_1,\dots,f_c))_g$ with $n\ge c\ge0$ and a $c\times c$ Jacobian minor invertible in $S$; the case $c=0$ is allowed and presents a localisation of a polynomial ring, and a standard smooth presentation is in particular a finitely presented algebra ([[def-ag-standard-smooth-algebra]]).

[F6] The Axiom of Choice states that every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 (classical) implies (scheme). Suppose $X\to\operatorname{Spec}k$ is classical smooth and let $x\in X$. By [F1] the classical condition is the local-standard-smooth condition, so there are affine open neighbourhoods $x\in V=\operatorname{Spec}B$ and $U=\operatorname{Spec}k\subseteq\operatorname{Spec}k$ with the map $k\to B$ standard smooth at the prime of $x$: after shrinking, $B$ is a finitely presented $k$-algebra carrying a standard smooth presentation, in particular $X\to\operatorname{Spec}k$ is locally of finite presentation at $x$ by [F5] and the structural map on this chart is a standard smooth presentation. The chart therefore has an invertible Jacobian minor in the sense of the presentation, and since the structural morphism is locally of finite presentation, the "if" direction of the Jacobian criterion [F4] makes $X\to\operatorname{Spec}k$ smooth at $x$. As $x$ was arbitrary, (classical) implies (scheme). [F1, F4, F5]

2.1 (scheme) implies (classical). Suppose $X\to\operatorname{Spec}k$ is smooth in the scheme-theoretic sense and let $x\in X$. It is locally of finite presentation at $x$ by [F3], so the "only if" direction of the Jacobian criterion [F4] exhibits affine neighbourhoods of $x$ and of the image point and a localisation $C_h$ of the coordinate ring with a standard smooth presentation whose Jacobian minor is invertible in $C_h$. That is precisely the local-standard-smooth condition of [F1] at $x$; as $x$ was arbitrary, (scheme) implies (classical). This completes clause 1. [F1, F3, F4, step 1.1]

2.2 Irreducibility is a separate convention. Let $X=\operatorname{Spec}k[t]\sqcup\operatorname{Spec}k[t]$ be the disjoint union of two copies of the affine line over $k$. It is a finite-type reduced $k$-scheme, and it is not irreducible and not connected, its two components being disjoint nonempty open subschemes. It is classically smooth: every point lies in one of the two copies, and that copy carries the standard smooth presentation $k\to k[t]$, namely the case $n=1$, $c=0$ of [F5] with empty equation list, which is affine over $k$ with an invertible (empty) Jacobian minor. By step 1.1 the structure morphism is scheme-smooth. Hence irreducibility and connectedness are not implied by smoothness and must be imposed separately if the earlier convention requires them; this is clause 4. [F4, F5, step 1.1]

3.1 Perfect base field. Assume now that $k$ is perfect. By [F2], $X$ is regular if and only if $X\to\operatorname{Spec}k$ is smooth in the local-standard-smooth convention, i.e. if and only if condition (classical) holds; by step 1.1 and step 2.1 condition (classical) is equivalent to condition (scheme). Hence all three conditions are equivalent, which is clause 2. No reducedness, irreducibility or separatedness enters, as [F2] imposes none. [F2, step 1.1, step 2.1]

4.1 The earlier variety convention. Let $k$ be perfect. If $X$ is classical smooth in the earlier convention, then by step 1.1 the structure morphism $X\to\operatorname{Spec}k$ is scheme-smooth, and by step 3.1 $X$ is regular, i.e. every local ring is a regular local ring. Conversely, let $X$ be a reduced finite-type $k$-scheme with scheme-smooth structure morphism; by step 2.1 it is classical smooth in the local-standard-smooth sense, and by step 3.1 it is regular, so it is classically smooth at every point in the pointwise regular-local reading used for varieties; reducedness is part of the earlier notion of a variety but is not needed for either implication. This is clause 3. [F1, F2, step 2.1, step 3.1]

5.1 Assumption accounting. The Axiom of Choice [F6] is assumed in the Statement and is used exactly through the classical-to-scheme and regular-equals-smooth suppliers: the Jacobian criterion [F4] of steps 1.1 and 2.1 and the perfect-field equivalence [F2] of steps 3.1 and 4.1, together with the field-change characterization [F1]. No other selection is made. [F1, F2, F4, F6, step 4.1, step 2.2] $\square$
