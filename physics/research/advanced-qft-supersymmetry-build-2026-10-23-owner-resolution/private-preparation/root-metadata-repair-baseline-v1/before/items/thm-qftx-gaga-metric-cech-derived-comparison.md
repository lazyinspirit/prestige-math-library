---
id: thm-qftx-gaga-metric-cech-derived-comparison
kind: theorem
title: "Refinement-limit Čech cohomology computes derived sheaf cohomology on metric spaces"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: "A general theorem on ordinary sheaf cohomology; no physical model or empirical claim is involved."
dependency_level: 0
deps:
  - def-axiom-of-choice
  - def-metric-space
  - def-paracompact-space
  - lem-paracompact-hausdorff-cover-shrinking
  - thm-stone-metric-spaces-are-paracompact
  - def-sheaf-on-topological-space
  - def-global-sections-functor-sheaves
  - def-cech-cochain-complex-open-cover
  - def-cech-cohomology-open-cover
  - def-global-cech-cohomology-directed-limit
  - def-sheaf-cohomology-derived-global-sections
  - thm-abelian-sheaves-have-enough-injectives
  - thm-exactness-of-sheaves-stalkwise
  - def-kernel-cokernel-image-sheaves
  - lem-injective-sheaves-flasque
  - thm-flasque-sheaves-acyclic
  - thm-leray-acyclic-cover-theorem
  - lem-cech-h0-global-sections
  - thm-zero-sheaf-cohomology-global-sections
  - def-cohomological-delta-functor
  - def-universal-delta-functor
  - def-effaceable-cohomological-delta-functor-in-positive-degrees
  - thm-right-derived-functors-form-a-cohomological-delta-functor
  - thm-derived-functors-are-universal-delta-functors
  - thm-effaceable-cohomological-delta-functors-are-universal
  - cor-universal-delta-functors-extending-the-same-degree-zero-functor-are-uniquely-isomorphic
  - thm-long-exact-sequence-in-cohomology
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-metric-space: mathematical-premise
  def-paracompact-space: mathematical-premise
  lem-paracompact-hausdorff-cover-shrinking: mathematical-premise
  thm-stone-metric-spaces-are-paracompact: mathematical-premise
  def-sheaf-on-topological-space: mathematical-premise
  def-global-sections-functor-sheaves: mathematical-premise
  def-cech-cochain-complex-open-cover: mathematical-premise
  def-cech-cohomology-open-cover: mathematical-premise
  def-global-cech-cohomology-directed-limit: mathematical-premise
  def-sheaf-cohomology-derived-global-sections: mathematical-premise
  thm-abelian-sheaves-have-enough-injectives: mathematical-premise
  thm-exactness-of-sheaves-stalkwise: mathematical-premise
  def-kernel-cokernel-image-sheaves: mathematical-premise
  lem-injective-sheaves-flasque: mathematical-premise
  thm-flasque-sheaves-acyclic: mathematical-premise
  thm-leray-acyclic-cover-theorem: mathematical-premise
  lem-cech-h0-global-sections: mathematical-premise
  thm-zero-sheaf-cohomology-global-sections: mathematical-premise
  def-cohomological-delta-functor: mathematical-premise
  def-universal-delta-functor: mathematical-premise
  def-effaceable-cohomological-delta-functor-in-positive-degrees: mathematical-premise
  thm-right-derived-functors-form-a-cohomological-delta-functor: mathematical-premise
  thm-derived-functors-are-universal-delta-functors: mathematical-premise
  thm-effaceable-cohomological-delta-functors-are-universal: mathematical-premise
  cor-universal-delta-functors-extending-the-same-degree-zero-functor-are-uniquely-isomorphic: mathematical-premise
  thm-long-exact-sequence-in-cohomology: mathematical-premise
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Jean-Pierre Demailly, Sheaf cohomology and the De Rham-Weil isomorphism theorem"
      url: "https://www-fourier.univ-grenoble-alpes.fr/~demailly/analytic_geometry_2019/sheaves_cech_cohomology.pdf"
      locator: "§1.A–1.C, printed/PDF pp. 1–5: refinement-limit Čech cohomology, the paracompact cochain-lifting lemma, and Leray comparison; complete relevant arguments read."
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
---

## Statement

Assume the full Axiom of Choice. Let $(X,d)$ be a metric space and let
$\mathcal F$ be a sheaf of abelian groups on its metric topology. Define
$\check H^q(X,\mathcal F)$ as the filtered colimit of the fixed-cover ordered
Čech cohomology groups over all open covers, and define $H^q(X,\mathcal F)$ as
the right derived functors of global sections from an injective resolution.
Then the canonical comparison
$$\check H^q(X,\mathcal F)\longrightarrow H^q(X,\mathcal F)$$
is a natural isomorphism for every integer $q\ge0$, compatible with the
identity identification of both degree-zero groups with $\Gamma(X,\mathcal F)$.

## Statement references

[Demailly, §1.A–1.C, printed/PDF pp. 1–5](https://www-fourier.univ-grenoble-alpes.fr/~demailly/analytic_geometry_2019/sheaves_cech_cohomology.pdf)

## Facts & Assumptions

**Given:** Full AC, a metric space $(X,d)$, and a sheaf of abelian groups
$\mathcal F$ on $X$.

[A1] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function; in particular metric open covers have locally finite open refinements.

[F1] [[def-metric-space]] and [[thm-stone-metric-spaces-are-paracompact]]: a metric space is Hausdorff and, under AC, every open cover has a locally finite open refinement; this is paracompactness as defined in [[def-paracompact-space]].

[F2] [[lem-paracompact-hausdorff-cover-shrinking]]: a locally finite open cover of a paracompact Hausdorff space has a locally finite shrinking with $\overline{V_i}\subset W_i\subset\overline{W_i}\subset U_i$.

[F3] [[thm-exactness-of-sheaves-stalkwise]]: a short sequence of abelian sheaves is exact exactly when it is exact on every stalk; hence an epimorphism of sheaves supplies local lifts of sections near each point.

[F4] [[def-cech-cochain-complex-open-cover]], [[def-cech-cohomology-open-cover]], and [[def-global-cech-cohomology-directed-limit]]: ordered Čech cochains are products of sections on finite intersections, their differential is the alternating restriction sum, fixed-cover cohomology is the cohomology of that complex, and $\check H^q(X,\mathcal F)$ is the directed colimit over covers with equality witnessed after a common refinement.

[F5] [[def-kernel-cokernel-image-sheaves]]: the kernel sheaf of a morphism of sheaves is computed objectwise, so sections of the middle sheaf mapping to zero lie in the first sheaf.

[F6] [[thm-abelian-sheaves-have-enough-injectives]] and [[def-sheaf-cohomology-derived-global-sections]]: under AC every abelian sheaf embeds in an injective sheaf and $H^q(X,-)$ is the right derived functor of $\Gamma(X,-)$.

[F7] [[lem-injective-sheaves-flasque]] and [[thm-flasque-sheaves-acyclic]]: injective abelian sheaves are flasque, and every restriction of a flasque sheaf has zero positive derived global-sections cohomology.

[F8] [[thm-leray-acyclic-cover-theorem]]: if all finite intersections of an open cover are acyclic for a sheaf, fixed-cover Čech cohomology maps isomorphically to derived sheaf cohomology.

[F9] [[lem-cech-h0-global-sections]] and [[thm-zero-sheaf-cohomology-global-sections]]: fixed-cover Čech degree zero and derived sheaf cohomology degree zero are canonically $\Gamma(X,\mathcal F)$.

[F10] [[def-cohomological-delta-functor]], [[thm-right-derived-functors-form-a-cohomological-delta-functor]], and [[thm-derived-functors-are-universal-delta-functors]]: under DC, the right derived functors of the additive left exact global-sections functor form a universal cohomological delta functor; full AC supplies DC.

[F11] [[def-effaceable-cohomological-delta-functor-in-positive-degrees]] and [[thm-effaceable-cohomological-delta-functors-are-universal]]: a cohomological delta functor effaceable by injectives in positive degrees is universal; [[cor-universal-delta-functors-extending-the-same-degree-zero-functor-are-uniquely-isomorphic]] gives the unique natural isomorphism between universal delta functors extending the same degree-zero identification.

[F12] [[thm-long-exact-sequence-in-cohomology]]: a short exact sequence of cochain complexes induces a natural long exact sequence in cohomology.

## Proof

**Proof technique:** direct.

1.1 Let $0\to\mathcal A\to\mathcal B\to\mathcal C\to0$ be a short exact sequence of abelian sheaves and let $c$ be a Čech $p$-cochain of $\mathcal C$ on an open cover $\mathcal U$. By [F1], refine $\mathcal U$ to a locally finite cover and then use [F2] to choose locally finite covers $\{V_i\}$ and $\{W_i\}$ with $\overline{V_i}\subset W_i\subset\overline{W_i}\subset U_i$. For each point $x$, local surjectivity from [F3] lifts each section $c_{i_0\ldots i_p}$ on a neighborhood of $x$ whenever $x\in U_{i_0}\cap\cdots\cap U_{i_p}$. Local finiteness leaves only finitely many $U_i$ containing $x$, finitely many such tuples, and a preliminary neighborhood $O_x$ meeting only finitely many $W_i$. For each tuple containing $x$, choose a neighborhood on which its section lifts. For the finite set of $W_i$ meeting $O_x$, shrink a neighborhood $N_x$ of $x$ inside all these lift neighborhoods, inside $U_i$ whenever $x\in U_i$, and inside $W_i$ whenever $x\in W_i$; if $x\notin U_i$, also shrink to avoid $\overline{W_i}$, which is closed and does not contain $x$ because $\overline{W_i}\subset U_i$. Then $N_x\subset U_i$ whenever $N_x\cap W_i\ne\varnothing$, and every component indexed by a tuple containing $x$ has a lift on $N_x$. Choose $\rho(x)$ with $x\in W_{\rho(x)}$. Then $N_x\subset W_{\rho(x)}\subset U_{\rho(x)}$, so $\{N_x\}$ refines $\mathcal U$. If $N_{x_0}\cap\cdots\cap N_{x_p}\ne\varnothing$, then $N_{x_0}$ meets every $W_{\rho(x_j)}$; the construction puts $N_{x_0}$ inside every $U_{\rho(x_j)}$, so $x_0$ belongs to the original intersection indexed by $\rho(x_0),\ldots,\rho(x_p)$. Its cochain component therefore has a lift on $N_{x_0}$ and hence on the full new intersection. Repeated source indices give a zero component of the alternating Čech refinement cochain, which also lifts. Thus every Čech cochain becomes liftable after refinement. [A1, F1, F2, F3, F4, given, construct]

2.1 Construct connecting maps on cocycles rather than taking a colimit of cochain complexes. Write $d$ for the Čech differential and $u:\mathcal A\to\mathcal B$ and $v:\mathcal B\to\mathcal C$. If $c\in C^p(\mathcal U,\mathcal C)$ is closed, step 1.1 supplies on a refinement a lift $b$ of its pullback. Since $v(db)=dc=0$, [F5] gives a unique $a\in C^{p+1}(\mathcal V,\mathcal A)$ with $u(a)=db$. Injectivity of $u$ and $d^2=0$ give $da=0$. Define $\partial[c]$ to be the refinement-limit class of $a$. Two lifts on the same cover differ by an $\mathcal A$-cochain, so their resulting $a$ differ by a coboundary. If $c$ is replaced by $c+dt$, lift $t$ after another refinement by step 1.1 and replace $b$ by $b+d\widetilde t$; the resulting $a$ is unchanged. For $p=0$ there are no negative-degree coboundaries. [F4, F5, step 1.1, construct, algebra]

3.1 Independence of refinement choices requires the cochain homotopy behind [F4]. Extend ordered cochains alternatingly to all tuples, setting repeated-index components to zero. For refinement maps $r,s$ from a cover $\mathcal V$ to $\mathcal U$, put, for a degree-$p$ cochain with $p\ge1$, $$ (Hc)_{j_0\ldots j_{p-1}}=\sum_{k=0}^{p-1}(-1)^k c_{r(j_0),\ldots,r(j_k),s(j_k),\ldots,s(j_{p-1})}|_{V_{j_0}\cap\cdots\cap V_{j_{p-1}}}, $$ and set $H=0$ on degree zero. All restrictions are defined because $V_j\subset U_{r(j)}\cap U_{s(j)}$. Expansion of the alternating differential cancels the terms omitting an index before or after the change from $r$ to $s$ in pairs; the two endpoint terms remain, giving $s^*-r^*=dH+Hd$. This identity also holds in degree zero, where $Hdc$ is the difference of the two restrictions of $c$. To compare two constructions in step 2.1, pull their lifts to a common refinement. Their images in $\mathcal C$ differ by $(s^*-r^*)c=dHc$. After lifting $Hc$ on a further refinement, the difference of the two $\mathcal B$-lifts minus the differential of that lift lies in $\mathcal A$; its differential is the difference of the two connecting cocycles. Thus both constructions define the same limit cohomology class. Common refinements also prove additivity, and lifting the images of chosen cochains proves naturality for morphisms of short exact sequences. No strictly functorial system of cochain maps on the preorder of covers is assumed. [F4, F5, step 1.1, step 2.1, algebra]

4.1 The resulting sequence of limit cohomology groups is exact. At $\check H^p(\mathcal B)$, if a closed $b$ maps to a coboundary $dt$ after refinement, lift $t$ by step 1.1 and replace $b$ by $b-d\widetilde t$; this is a closed $\mathcal A$-cochain representing a preimage. In degree zero a zero image already lies in $\mathcal A$ by [F5]. At $\check H^p(\mathcal C)$, if the connecting cocycle $a$ of step 2.1 becomes $de$, replace its lift $b$ by $b-u(e)$; it is now closed and maps to $c$. Conversely a closed lift has zero connecting class. At $\check H^{p+1}(\mathcal A)$, if a closed $a$ maps to a coboundary $db$ after refinement, then $v(b)$ is closed and its connecting class is $[a]$ by construction. Conversely every connecting cocycle maps to $db$. Compositions of consecutive maps vanish by the same formulas; injectivity at degree-zero global sections follows from [F5]. Equality to zero in a limit is witnessed on a common refinement by [F4], so these arguments cover every element of every kernel. Together with [F9] and the naturality in step 3.1, this makes $\check H^\bullet(X,-)$ a cohomological delta functor extending $\Gamma(X,-)$. [F4, F5, F9, step 1.1, step 2.1, step 3.1, algebra]

5.1 Let $\mathcal I$ be injective. By [F7] it and all its restrictions are acyclic, so every open cover is $\mathcal I$-acyclic. By [F8], $\check H^q(\mathcal U,\mathcal I)\cong H^q(X,\mathcal I)=0$ for every cover and every $q>0$. Hence $\check H^q(X,\mathcal I)=0$ for $q>0$. Since every sheaf embeds in such an $\mathcal I$ by [F6], the Čech delta functor of step 4.1 is effaceable in positive degrees. [F6, F7, F8, step 4.1]

6.1 By [F10], $H^\bullet(X,-)$ is universal, and by [F11] so is $\check H^\bullet(X,-)$. Their degree-zero identifications with $\Gamma(X,-)$ agree by [F9], so [F11] gives a unique natural isomorphism $\check H^q(X,\mathcal F)\cong H^q(X,\mathcal F)$ in every degree. The canonical fixed-cover Čech-to-derived maps are compatible with refinement by [F8]; their connecting-map compatibility is the same lift-and-differentiate construction $u(a)=db$ in step 2.1, computed in a resolution. They therefore induce a morphism of delta functors with this degree-zero identity, so universality identifies their limit with this unique isomorphism. This is the asserted canonical comparison. Full AC supplies DC for [F10] and the choices in step 1.1; no compact-support cohomology is used. [A1, F9, F10, F11, F12, step 1.1, step 5.1] ∎
