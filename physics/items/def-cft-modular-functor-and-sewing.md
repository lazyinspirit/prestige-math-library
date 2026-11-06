---
id: def-cft-modular-functor-and-sewing
kind: definition
title: Chiral modular functor with sewing and anomaly
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 8
domain: mathematics
library: mathematics
deps:
  - def-cft-coinvariants-and-conformal-blocks
  - def-cft-pointed-analytic-worldsheet
  - def-cft-plumbing-and-sewing-parameter
  - def-gts-stable-n-pointed-algebraic-curves-and-the-moduli-functor
  - thm-gts-proper-delignemumford-stack-of-stable-pointed-curves
  - def-virasoro-algebra
dependency_roles:
  def-cft-coinvariants-and-conformal-blocks: mathematical-premise
  def-cft-pointed-analytic-worldsheet: mathematical-premise
  def-cft-plumbing-and-sewing-parameter: mathematical-premise
  def-gts-stable-n-pointed-algebraic-curves-and-the-moduli-functor: mathematical-premise
  thm-gts-proper-delignemumford-stack-of-stable-pointed-curves: mathematical-premise
  def-virasoro-algebra: mathematical-premise
justified_by: []
aliases: []
physical_scope: null
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pending
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: "Chiara Damiolini and Lukas Woike, Modular Functors from Conformal Blocks of Rational Vertex Operator Algebras"
      url: https://arxiv.org/pdf/2507.05845v2
      locator: "§§3.1–3.4, Definition 3.4.2, §4.1, and §§4.2–4.5; the surface modular operad, Rexf-valued modular algebras, Hodge-line anomaly extension, propagation and edge-contraction interface."
    - title: "Adrien Brochier and Lukas Woike, A Classification of Modular Functors via Factorization Homology"
      url: https://arxiv.org/pdf/2212.11259v5
      locator: "§2.2, printed pp. 10–11, for Forests and cyclic operads; §3.1, printed pp. 15–17, Definitions 3.1, 3.2 and 3.5 and the insertion-of-vacua functor (3.2)."
    - title: "Bojko Bakalov and Alexander Kirillov Jr., Lectures on Tensor Categories and Modular Functor, Chapter 5"
      url: https://www.math.stonybrook.edu/~kirillov/tensor/chapter5.ps.gz
      locator: "§5.1, printed pp. 93–98; §5.2, pp. 99–106; §5.7, pp. 127–130. Classical topological modular-functor conventions and central extensions; not a VOA sewing proof."
    - title: "Bin Gui and Hao Zhang, Analytic Conformal Blocks of C2-cofinite Vertex Operator Algebras II: Convergence of Sewing and Higher Genus Pseudo-q-traces"
      url: https://arxiv.org/pdf/2411.07707v4
      locator: "§1.2 for the sewing-family setup and §4.1 for local multi-pair plumbing; cited only for analytic representatives, not for the algebraic stable-curve construction."
    - title: "Joachim Kock, Notes on Psi Classes"
      url: https://mat.uab.cat/~kock/GW/notes/psi-notes.pdf
      locator: "Sections 1.2.5 and 1.3.1–1.3.4, printed pp. 10–13: retained-mark rational tails and the cotangent-line correction under forgetting; the framed domain and local obstruction are checked below."
---

## Definition

Work over $\mathbb C$. Let $\mathsf{Graphs}$ be the symmetric monoidal category whose objects are finite disjoint unions of corollas, a corolla being one vertex with a finite set of incident legs. A graph is specified by finite vertex and half-edge sets, a source map from half-edges to vertices, and an involution on half-edges: fixed half-edges are legs and paired half-edges are internal edges. A morphism $T\to T'$ is an isomorphism class of such a graph with its cut half-edges identified with the legs of the input corollas $T$ and its connected components, after contraction of internal edges, identified with the output corollas $T'$. Composition is graph substitution; disjoint union gives the monoidal product and the empty union its unit. Regard this category as a bicategory with only identity 2-morphisms. Here $\mathsf{Cat}$ is the bicategory of essentially small categories, functors and natural transformations, with Cartesian product.

The **surface modular operad** is a weak symmetric monoidal functor $\mathsf{Surf}:\mathsf{Graphs}\to\mathsf{Cat}$. For one corolla $T$, $\mathsf{Surf}(T)$ is the groupoid of connected compact oriented smooth surfaces with boundary circles bijectively labeled by the legs of $T$ and supplied with orientation-preserving parametrizations by $S^1$; its morphisms are isotopy classes of orientation- and parametrization-preserving diffeomorphisms. For $T=\bigsqcup_vT_v$, set $\mathsf{Surf}(T)=\prod_v\mathsf{Surf}(T_v)$, with the terminal category at the empty union. The functor of a graph glues the paired boundary circles with opposite induced orientations and groups the glued surfaces by its connected components. The associativity, symmetry and unit identifications are the canonical identifications of these gluings, with the parametrized cylinder as operadic identity. Thus connected surfaces are objects of corolla values, not a category purported to be closed under disjoint union.

Let $\mathsf{Forests}\subset\mathsf{Graphs}$ have the same objects and only those graph morphisms whose connected components are trees: connected graphs with no cycles, equivalently with $e=v-1$ for their numbers of internal edges and vertices. Disjoint union and graph substitution preserve this condition. A **cyclic operad** here is a weak symmetric monoidal functor $\mathsf{Forests}\to\mathsf{Cat}$ with an operadic identity as above. Define $\mathsf{Surf}_0(T)$ to be the full subgroupoid of $\mathsf{Surf}(T)$ in which every surface component has genus zero, using the product convention on disjoint corollas. Its operation functors are restricted to $\mathsf{Forests}$. This gives a cyclic suboperad of $\mathsf{Surf}|_{\mathsf{Forests}}$, with the same identity cylinder. In fact a connected sewing graph $\Gamma$ produces genus $\sum_v g_v+e-v+1$ from vertex surfaces of genera $g_v$. Thus forests preserve genus zero; a self-sewing edge has $e=v=1$ and raises genus by one. No genus-zero suboperad on all of $\mathsf{Graphs}$ is asserted.

Here **finite category** means a $\mathbb C$-linear abelian category $\mathcal C$ with finite-dimensional morphism spaces, finitely many simple objects up to isomorphism, enough projectives, and finite length for every object. Its Deligne tensor product $\mathcal C\boxtimes\mathcal C$ is the finite category universal for right-exact $\mathbb C$-bilinear functors out of $\mathcal C\times\mathcal C$. Write $\mathrm{Vect}_{\mathbb C}^{\mathrm{fd}}$ for the finite category of finite-dimensional complex vector spaces.

Boundary reversal is specified by a contravariant equivalence $\mathsf D:\mathcal C^{\mathrm{op}}\to\mathcal C$ and a natural biduality isomorphism $\eta:\mathrm{id}_{\mathcal C}\Rightarrow\mathsf D\mathsf D^{\mathrm{op}}$ satisfying $\mathsf D(\eta_X)\circ\eta_{\mathsf D X}=\mathrm{id}_{\mathsf D X}$. Reversing a boundary labeled by $X$ relabels it by $\mathsf D X$; a morphism $f:X\to Y$ is sent to $\mathsf D(f):\mathsf D Y\to\mathsf D X$, and two reversals are identified with the original label by $\eta_X$.

The **evaluation pairing** is a right-exact $\mathbb C$-linear functor $\kappa:\mathcal C\boxtimes\mathcal C\to\mathrm{Vect}_{\mathbb C}^{\mathrm{fd}}$. Its **coevaluation** is a right-exact $\mathbb C$-linear functor $\mathrm{coev}:\mathrm{Vect}_{\mathbb C}^{\mathrm{fd}}\to\mathcal C\boxtimes\mathcal C$; write $\Delta=\mathrm{coev}(\mathbb C)\in\mathcal C\boxtimes\mathcal C$. The pairing is nondegenerate when the following two natural isomorphisms of functors $\mathcal C\to\mathcal C$ hold, using the canonical unit and associativity isomorphisms for $\boxtimes$:

$$(\mathrm{id}_{\mathcal C}\boxtimes\kappa)\circ(\mathrm{coev}\boxtimes\mathrm{id}_{\mathcal C})\cong\mathrm{id}_{\mathcal C}, \qquad (\kappa\boxtimes\mathrm{id}_{\mathcal C})\circ(\mathrm{id}_{\mathcal C}\boxtimes\mathrm{coev})\cong\mathrm{id}_{\mathcal C}.$$

The boundary-reversal equivalence is required to be the duality determined by this pairing: include a natural isomorphism
$$\chi_{X,Y}:\kappa(X,Y)\xrightarrow{\cong}\operatorname{Hom}_{\mathcal C}(X,\mathsf D Y)^*,$$
where the star is finite-dimensional complex duality. Require the pairing symmetry to agree, through $\chi$, with dualizing the natural map $f\mapsto\mathsf D(f)\circ\eta_X$ from $\operatorname{Hom}_{\mathcal C}(Y,\mathsf D X)$ to $\operatorname{Hom}_{\mathcal C}(X,\mathsf D Y)$. In particular, $\mathsf D$ is not independent label-permutation data unrelated to $\kappa$. The specified coevaluation and triangle isomorphisms are for this same evaluation pairing.

Symmetry is a specified natural isomorphism $\kappa\circ\tau\cong\kappa$, where $\tau$ exchanges the two Deligne factors, together with the induced symmetry $\tau(\Delta)\cong\Delta$ compatible with both triangle isomorphisms. In the semisimple case, if $X_i$ ranges over representatives of the simple isomorphism classes and $X_i^\vee:=\mathsf D X_i$, then $\Delta\cong\bigoplus_i X_i^\vee\boxtimes X_i$. Thus the first slot of each internal pair is exactly the boundary-reversed label.

A **chiral modular functor** consists of an extension of these $\mathsf{Graphs}$-indexed Cat-valued modular operads $q:Q\to\mathsf{Surf}$ whose homotopy fiber over each $T\in\mathsf{Graphs}$ and $\Sigma\in\mathsf{Surf}(T)$ is the groupoid $Q_\Sigma$ of pairs $(\widetilde\Sigma,\theta)$ with $\widetilde\Sigma\in Q(T)$ and an isomorphism $\theta:q(\widetilde\Sigma)\xrightarrow{\cong}\Sigma$ in $\mathsf{Surf}(T)$, with morphisms the arrows in $Q(T)$ commuting with these isomorphisms; require each $Q_\Sigma$ to be nonempty and connected. For $T\in\mathsf{Forests}$, let $Q_0(T)$ be the full subgroupoid of $Q(T)$ on objects whose images under $q_T$ lie in $\mathsf{Surf}_0(T)$. Forest operations restrict to these subgroupoids, giving a cyclic operad $Q_0$ and a map $q_0:Q_0\to\mathsf{Surf}_0$. The extension includes a section $s_0:\mathsf{Surf}_0\to Q_0$ of cyclic operads: a weak symmetric monoidal natural transformation on $\mathsf{Forests}$ preserving the operadic identity, with a specified coherent isomorphism $q_0\circ s_0\cong\mathrm{id}_{\mathsf{Surf}_0}$. It also includes the insertion-of-vacua condition below and a modular $Q$-algebra valued in $\mathrm{Rexf}$ on all of $\mathsf{Graphs}$. Here $\mathrm{Rexf}$ is the symmetric monoidal bicategory whose objects are finite $\mathbb C$-linear abelian categories, whose 1-morphisms are right-exact $\mathbb C$-linear functors, whose 2-morphisms are natural transformations, and whose monoidal product is $\boxtimes$. Choose a distinguished vacuum object $E\in\mathcal C$; no monoidal structure on $\mathcal C$ is assumed. A modular $Q$-algebra is a morphism $F:Q\to\operatorname{End}_{\mathcal C}^{\kappa}$ of modular operads, where $\operatorname{End}_{\mathcal C}^{\kappa}(T)=\mathrm{Rexf}(\mathcal C^{\boxtimes\operatorname{Legs}(T)},\mathrm{Vect}_{\mathbb C}^{\mathrm{fd}})$ for a corolla, extended by Cartesian products to disjoint unions. Its graph functors insert the coevaluation object at cut internal pairs, and its operadic identity is the pairing functor; the natural transformation $F$ preserves these identities and compositions up to the specified coherent isomorphisms. Concretely, the algebra assigns to a surface $\Sigma$ with $n$ boundary circles a right-exact functor $F_\Sigma:\mathcal C^{\boxtimes n}\to\mathrm{Vect}_{\mathbb C}^{\mathrm{fd}}$ and natural isomorphisms for parametrization-preserving mapping classes, disjoint union, capping by the vacuum label $E$, and sewing. Capping/insertion identifies the value with the extra boundary labeled by $E$ with the value before adding that boundary. If $\Sigma_{\mathrm{gl}}$ is obtained by gluing two oppositely oriented boundary circles of $\Sigma$, sewing is the natural isomorphism
$$F_{\Sigma_{\mathrm{gl}}}(\ldots)\cong F_\Sigma(\ldots,\Delta,\ldots).$$
For semisimple $\mathcal C$ this reads $F_{\Sigma_{\mathrm{gl}}}(\ldots)\cong\bigoplus_i F_\Sigma(\ldots,X_i^\vee,X_i,\ldots)$. Insertion of the distinguished vacuum object $E$ at a new marked boundary identifies that value with the value before adding the boundary. All these isomorphisms are required to be natural and coherent with iterated sewing, the identity cylinder, disjoint union, and the two pairing-coevaluation triangle isomorphisms.

The extension's insertion-of-vacua condition is an equivalence on its homotopy fibers, separate from the algebra's vacuum capping isomorphism. For a finite disjoint union $D^{\sqcup J}$ of parametrized oriented disks and an orientation-preserving embedding $\phi:D^{\sqcup J}\hookrightarrow\Sigma$, let $\Sigma_\phi$ be the complementary surface, with the new boundary circles retained and labeled for gluing. Let $e_D=s_0(D^{\sqcup J})\in Q_{D^{\sqcup J}}$ be the selected lift of the disks and let $\gamma_\phi:Q_{D^{\sqcup J}}\times Q_{\Sigma_\phi}\to Q_\Sigma$ be the graph-operation functor that glues the corresponding boundary circles. The induced functor
$$\lambda_\phi:Q_{\Sigma_\phi}\to Q_\Sigma,\qquad x\mapsto\gamma_\phi(e_D,x),$$
is required to be an equivalence for every $\Sigma$ and $\phi$.

For the anomaly convention, let $2g-2+n>0$. Over a $\mathbb C$-scheme $S$, a stable $n$-pointed genus-$g$ family is a proper, flat, finitely presented morphism $\bar\pi:\bar C\to S$ of relative dimension one whose geometric fibers are connected nodal curves with arithmetic genus $g$, together with $n$ ordered, pairwise disjoint sections $\bar\sigma_i:S\to\bar C$ through the relative smooth locus, such that $\omega_{\bar\pi}(\sum_i\bar\sigma_i(S))$ is relatively ample. Here arithmetic genus is $1-\chi(\bar C_s,\mathcal O_{\bar C_s})$. Let $\overline{\mathcal M}_{g,n,\mathbb C}$ be the moduli stack of these families, and let $\overline\pi:\overline{\mathcal C}_{g,n,\mathbb C}\to\overline{\mathcal M}_{g,n,\mathbb C}$ be its universal stable curve. The nodal boundary $\bar\Delta$ is the divisor of singular fibers. The source stack $\mathsf M^f_{g,n}$ is the frame torsor over $\overline{\mathcal M}_{g,n,\mathbb C}$ whose points are stable curves together with nonzero tangent vectors at all markings; write $\widetilde{\mathcal M}_{g,n}$ for it in this item. Concretely, it is the fiber product over $\overline{\mathcal M}_{g,n,\mathbb C}$ of the complements of the zero sections in the relative tangent lines $\bar\sigma_i^*T_{\overline{\mathcal C}_{g,n,\mathbb C}/\overline{\mathcal M}_{g,n,\mathbb C}}$. Let $\pi:\mathcal C_{g,n}\to\widetilde{\mathcal M}_{g,n}$ be the pullback of the universal curve, let $\omega_\pi$ be its relative dualizing line bundle, and let $\Lambda=\det(\pi_*\omega_\pi)$ be the Hodge line. The nodal boundary $\widetilde\Delta$ is the pullback of $\bar\Delta$. The logarithmic Atiyah algebra $A_\Lambda(-\widetilde\Delta)$ is the sheaf of first-order differential operators on $\Lambda$ whose scalar symbols are vector fields tangent to $\widetilde\Delta$; its anchor is the symbol map to $T_{\widetilde{\mathcal M}_{g,n}}(-\log\widetilde\Delta)$. By $\alpha A_\Lambda(-\widetilde\Delta)$ we mean the pushout of this Lie-algebroid extension along multiplication by $\alpha$ on its central copy of $\mathcal O_{\widetilde{\mathcal M}_{g,n}}$. Use the analytifications of this stack, Hodge line and Lie algebroid for the holomorphic data below. To specify a **chiral modular functor with anomaly parameter $\alpha\in\mathbb C$**, require the preceding $(Q,F)$ to carry the following additional structure. For every stable $(g,n)$ and labels $X_1,\ldots,X_n\in\mathcal C$, supply a finite-rank holomorphic bundle $\mathcal B_{g,n}(X_\bullet)$ on the analytic tangent-frame stack just defined, functorial in the labels, with an action
$$\nabla:\alpha A_\Lambda(-\widetilde\Delta)\longrightarrow\operatorname{Diff}^1_{\mathbb C}(\mathcal B_{g,n}(X_\bullet)).$$
Here the target consists of first-order operators with scalar symbol; require $\nabla$ to be $\mathcal O$-linear, bracket preserving, to have symbol equal to the anchor, and to send the central section $f\in\mathcal O$ to $f\,\mathrm{id}_{\mathcal B}$. Thus for a local section $a$ with anchor $v$, $\nabla_a(fs)=f\nabla_a(s)+v(f)s$. This is the specified integrable logarithmic twisted connection, with precisely the $\alpha$-scaled Hodge extension as its domain.

The bundles must realize the given modular algebra, rather than an unrelated family: identify their smooth-curve fibers with the labeled values of $F$, and require their projective parallel transport to coincide with the mapping-class action of $F$ modulo invertible scalars. More explicitly, for a lift $\widetilde\Sigma$ put $K_{\widetilde\Sigma}=\ker(\operatorname{Aut}_{Q(T)}(\widetilde\Sigma)\to\operatorname{Aut}_{\mathsf{Surf}(T)}(\Sigma))$. Require every element of $K_{\widetilde\Sigma}$ to act on each labeled value by an invertible scalar multiple of the identity. The chosen linear lifts of projective parallel transport must be the action on these values supplied by $Q$ and $F$, coherently under changing lifts. Projective transport means linear isomorphisms modulo invertible scalar multiples, also for zero fibers. Require the disjoint-union and sewing identifications to intertwine these twisted connections after the corresponding pullbacks, using normalization of nodal curves with the specified local plumbing for sewing. The vacuum-capping pullback has the precise domain specified next. These identifications and their compatibility are additional data; their existence is not deduced from connected extension fibers. This formulation allows extension presentations with extra kernel acting trivially.

For capping, assume that the target pair $(g,n)$ is stable and let $f:\overline{\mathcal M}_{g,n+1,\mathbb C}\to\overline{\mathcal M}_{g,n,\mathbb C}$ forget the last marking and stabilize. Write $r:C\to C^{\mathrm{st}}$ for this stabilization on families. Let $U_{g,n+1}$ be the open substack on which $r$ is an isomorphism near every retained marked section. Equivalently, remove the boundary divisors $D_{i,n+1}$, $1\leq i\leq n$, whose curves have a rational tail with exactly the retained marking $i$, the forgotten marking $n+1$, and its attaching node as special points. Set $U^f_{g,n+1}=U_{g,n+1}\times_{\overline{\mathcal M}_{g,n+1,\mathbb C}}\widetilde{\mathcal M}_{g,n+1}$. With an empty set of retained markings this condition is vacuous. On this domain there is a framed capping morphism
$$\xi^f:U^f_{g,n+1}\longrightarrow\widetilde{\mathcal M}_{g,n},\qquad(C;p_\bullet;v_\bullet)\longmapsto(C^{\mathrm{st}};r(p_1),\ldots,r(p_n);d r_{p_1}v_1,\ldots,d r_{p_n}v_n).$$
Require a natural vacuum-capping isomorphism
$$(\xi^f)^*\mathcal B_{g,n}(X_1,\ldots,X_n)\xrightarrow{\cong}\left.\mathcal B_{g,n+1}(X_1,\ldots,X_n,E)\right|_{U^f_{g,n+1}},$$
intertwining the pulled-back logarithmic twisted connections via the Hodge-line identification induced by stabilization. On smooth curves it must induce the vacuum-capping map of $F$; require compatibility with disjoint union, sewing and successive cappings wherever the constituent framed morphisms are defined. This includes insertion at any new disjoint smooth point of any stable nodal family and also contraction of rational bridges away from the retained markings. The bundles and sewing data remain defined on the full stable-curve frame stacks. If a retained marking lies on a contracted tail, $d r_{p_i}v_i=0$, so this formula does not define a morphism to the nonzero-frame torsor there. The global unframed morphism $f$ still exists: its pullback of bundles on $\widetilde{\mathcal M}_{g,n}$ has the globally valid source $\overline{\mathcal M}_{g,n+1,\mathbb C}\times_{\overline{\mathcal M}_{g,n,\mathbb C}}\widetilde{\mathcal M}_{g,n}$, which remembers frames on the stabilized target, rather than frames on contracted components. It must not be identified with $\widetilde{\mathcal M}_{g,n+1}$. The topological capping axiom for $F$ applies to every surface as before; it does not supply a nonexistent global morphism between these two frame torsors.

For a VOA realization the central-charge convention is $\alpha=c/2$, where the Virasoro central element acts as $c\,\mathrm{id}$, and the vacuum is $V$. Identification of the bundles with its coinvariant sheaves, finite rank and the compatible anomaly and sewing structures must be established for that VOA. For the anomaly-equipped data just specified, mapping-class actions are linear on $Q$ and projective on $\mathsf{Surf}$.

When an analytic representative is used, the pointed-worldsheet and coordinate data are those of the supplied analytic-worldsheet definition, and a local plumbing parameter obeys $zw=q$ as in the supplied plumbing definition. These analytic data do not define the global algebraic stable-curve stack. The algebraic conformal-block input is the relative coinvariant quotient/sheaf defined by the outgoing chiral action, which by itself supplies no finite-rank, local-freeness, or base-change assertion. This definition specifies the structure and axioms; it does not assert that any given VOA supplies them.

The following schematic records only the topology of the two sewings. The marked circles joined by the internal edge are parametrized with opposite induced orientations; the edge is not a proof of the sewing isomorphism.

```tikz
\begin{tikzpicture}[scale=0.9, every node/.style={font=\small}]
  \draw (0,0) ellipse (1.25 and 0.8);
  \draw (3.4,0) ellipse (1.25 and 0.8);
  \node at (0,0) {$\Sigma_1$};
  \node at (3.4,0) {$\Sigma_2$};
  \draw[thick] (1.05,0.25) circle (0.14);
  \draw[thick] (2.35,0.25) circle (0.14);
  \draw[thick] (1.19,0.25) -- (2.21,0.25);
  \node at (1.7,-0.55) {separating};
  \draw (6.3,0) ellipse (1.25 and 0.8);
  \node at (6.3,0) {$\Sigma$};
  \draw[thick] (5.3,0.28) circle (0.14);
  \draw[thick] (7.3,0.28) circle (0.14);
  \draw[thick] (5.3,0.42) .. controls (5.5,1.55) and (7.1,1.55) .. (7.3,0.42);
  \node at (6.3,-0.55) {nonseparating};
\end{tikzpicture}
```

## Definition references

[[def-cft-coinvariants-and-conformal-blocks]]

[[def-cft-pointed-analytic-worldsheet]]

[[def-cft-plumbing-and-sewing-parameter]]

[[def-gts-stable-n-pointed-algebraic-curves-and-the-moduli-functor]]

[[thm-gts-proper-delignemumford-stack-of-stable-pointed-curves]]

[[def-virasoro-algebra|Virasoro algebra in the $L_m$ convention]]

## Facts & Assumptions

**Given:** A Graphs-indexed surface operation, a finite category $\mathcal C$, its contravariant boundary-reversal equivalence and biduality, a symmetric nondegenerate evaluation functor, its natural compatibility $\chi$ with that duality, and coevaluation functor with both triangle isomorphisms, and a proposed coherent family of functors and sewing maps. Use an analytic worldsheet or plumbing representative only where specified above.

[F1] [[def-cft-coinvariants-and-conformal-blocks]]: the relative coinvariant object is the sheaf cokernel of the relative outgoing action; this algebraic definition asserts no finite rank, local freeness, or automatic base change.

[F2] [[def-cft-pointed-analytic-worldsheet]]: analytic worldsheets are compact pointed Riemann surfaces with disjoint local-coordinate neighborhoods; the definition does not supply an algebraic moduli stack.

[F3] [[def-cft-plumbing-and-sewing-parameter]]: locally the smoothing is $zw=q$, with nodal fiber $zw=0$ at $q=0$; this is local and makes no global compactification claim.

[F4] [[def-gts-stable-n-pointed-algebraic-curves-and-the-moduli-functor]] specifies the stable-family moduli functor: proper flat finitely presented nodal families with disjoint smooth-locus sections and relatively ample marked dualizing sheaf.

[F5] [[thm-gts-proper-delignemumford-stack-of-stable-pointed-curves]] is a draft mathematical supplier whose Statement asserts that this functor is represented by a proper Deligne–Mumford stack in the stable range, smooth over $\operatorname{Spec}\mathbb Z$ with relative normal-crossings nodal boundary. Its proof is present in the current draft. This item uses it to specify the ambient algebraic stack and boundary, not to assert a new properness theorem.

[F6] [[def-virasoro-algebra|Virasoro algebra in the $L_m$ convention]] fixes the Virasoro central generator convention; a representation has central charge $c$ when that generator acts by $c\,\mathrm{id}$.

[A1] Damiolini–Woike, §§3.1–3.4 and Definition 3.4.2 specify the modular-operad and modular-algebra convention; §4.1 identifies the Hodge line $\Lambda$ on the pointed stable-curve moduli stack and the scalar family of anomaly extensions, with $\alpha=c/2$ for the VOA coinvariant construction.

[A2] Brochier–Woike, §2.2 and §3.1, Definitions 3.1, 3.2 and 3.5: cyclic operads are indexed by forests, and genus-zero restriction is cyclic; an extension has connected homotopy fibers, is sectioned over genus zero, and satisfies the insertion-of-vacua equivalence (3.2), which glues the selected disk lift to the complementary surface on extension fibers.

## Proof

1.1 By [F4] the stable-family objects and markings are specified, and [F5] supplies their algebraic moduli stack and nodal boundary. Pulling the universal curve back to the product of the nonzero tangent-frame torsors gives the stated family $\pi$. The inputs in [F2] and [F3] determine only the analytic pointed surface and its local plumbing parameter. By [F1], the relative coinvariant quotient alone asserts no finite rank, local freeness, base change or sewing isomorphism. The definition therefore lists finite-category values, duality data, mapping-class maps, the logarithmic anomaly action and sewing maps as additional structure rather than deriving them from that quotient. [given, F1, F2, F3, F4, F5, construct]

1.2 For a connected sewing graph with $v$ vertices and $e$ internal edges, let the vertex surface at $a$ have genus $g_a$ and $b_a$ boundary circles. Put $b=\sum_a b_a-2e$, the number of unsewn boundaries. A compact oriented genus-$g_a$ surface with $b_a$ boundary circles has Euler characteristic $2-2g_a-b_a$: capping its boundaries adds $b_a$ disks of Euler characteristic one. Choose finite cell structures with every gluing circle a subcomplex. Identifying two such circles removes one duplicate copy of their vertices and edges, whose alternating count is $\chi(S^1)=0$, so sewing preserves the sum of Euler characteristics. Hence $2-2g-b=\sum_a(2-2g_a-b_a)$ for the connected sewn surface, and $g=\sum_a g_a+e-v+1$. For a tree, $e=v-1$, giving $g=0$ when every $g_a=0$. Replacing each vertex of a tree by a tree preserves connectedness and gives total edge count $\sum_a(v_a-1)+(v-1)=\sum_a v_a-1$, so forest morphisms are closed under substitution; identities and disjoint unions are included. Mapping classes preserve genus, and the cylinder has genus zero, so $\mathsf{Surf}_0$ and its full preimage $Q_0$ are cyclic operads with the claimed identities. The section is required only on this domain. A one-vertex one-edge self-sewing instead has $g=g_1+1$ and remains an operation of the full modular operad. [given, construct, algebra]

2.1 In the semisimple case specified in the Definition, every object of $\mathcal C\boxtimes\mathcal C$ is a finite direct sum of simple pairs $S_a\boxtimes S_b$. The compatibility $\chi$ gives $\dim\kappa(S_b,S_j)=1$ exactly when $S_b\cong\mathsf D S_j$ and zero otherwise: a finite-dimensional division endomorphism algebra of a simple over $\mathbb C$ is $\mathbb C$, since every element has an eigenvalue and a nonzero noninvertible difference must be zero. Write $n_{ab}$ for the multiplicity of $S_a\boxtimes S_b$ in $\Delta$. Applying the first triangle isomorphism to $S_j$ gives $\sum_a n_{a,\mathsf D j}S_a\cong S_j$, hence $n_{a,\mathsf D j}=\delta_{a,j}$. The biduality $\eta$ makes $\mathsf D$ involutive up to isomorphism, so reindexing gives $\Delta\cong\bigoplus_i\mathsf D S_i\boxtimes S_i$, exactly the semisimple formula in the Definition. No direct-sum formula is asserted for a nonsemisimple finite category. [given, step 1.1, algebra]

2.2 The stabilization construction in [F5] gives $f$ on unframed stable curves. By the component criterion in [F4], when the target pair is stable, forgetting one marking can destabilize only its rational component with three special points. If it has one node and one retained mark besides the forgotten mark, it is precisely a tail $D_{i,n+1}$; if it has two nodes, it is a bridge carrying no retained mark. Contraction replaces a tail by its retained smooth marking or a bridge by a node, preserving the number of special points on every other component, so no additional components become unstable. Off the listed tail divisors, $r$ is therefore an isomorphism near each retained mark and its differential carries nonzero frames to nonzero frames, compatibly with base change. This proves that $\xi^f$ has the stated domain, including the bridge case. Stabilization preserves the Hodge spaces: on the normalization, dualizing differentials have at most simple poles at node branches with opposite residues. A rational tail with only one node carries the zero such differential; on a rational bridge the residues at its two nodes are opposite and uniquely determine its differential. Removing these components consequently identifies the differential spaces, and the same residue description in families gives the Hodge-line identification. Locally at a contracted bridge the two node parameters $a,b$ give stabilized parameter $ab$, so $d\log(ab)=d\log a+d\log b$; away from the contraction the node parameters are unchanged. Thus the comparison of logarithmic connections is defined. The displayed vacuum isomorphism and its horizontality are imposed structure, not consequences of this geometric check. [given, F4, F5, step 1.1, construct, algebra]

3.1 The pairing-duality compatibility cannot be dropped. Let $\mathcal C=\mathrm{Vect}_{\mathbb C}^{\mathrm{fd}}\oplus\mathrm{Vect}_{\mathbb C}^{\mathrm{fd}}$, with simples $S_1,S_2$, and let $\mathsf D(V_1,V_2)=(V_1^*,V_2^*)$, so $\mathsf D$ fixes both simple labels and has the standard biduality. Define the symmetric right-exact pairing $\kappa((V_1,V_2),(W_1,W_2))=(V_1\otimes W_2)\oplus(V_2\otimes W_1)$ and $\mathrm{coev}(W)=W\otimes(S_1\boxtimes S_2\oplus S_2\boxtimes S_1)$, where tensoring by $W$ denotes finite vector-space copower. Both triangle composites send each simple $S_j$ to itself, with the ordinary vector-space unit maps, and hence hold naturally on all objects. Nevertheless $\Delta=S_1\boxtimes S_2\oplus S_2\boxtimes S_1$ is not $\bigoplus_i\mathsf D S_i\boxtimes S_i$: they have different simple summands. This data is excluded by $\chi$, since $\kappa(S_1,S_1)=0$ but $\operatorname{Hom}(S_1,\mathsf D S_1)^*=\mathbb C$. Thus the old triangle-only implication is false, while step 2.1 proves the formula under the stated compatibility. [given, step 2.1, construct, algebra]

3.2 The functors $\mathsf{Surf},Q,\operatorname{End}_{\mathcal C}^{\kappa}$ all have domain $\mathsf{Graphs}$; their disjoint-union structure is sent to Cartesian products of categories. The algebra is the indicated monoidal natural transformation, not a tensor product operation on the groupoid of connected surfaces. Its extension and natural isomorphisms satisfy the modular-operad and monoidal coherence axioms in [A1]. The extension's disk-insertion map is the specific equivalence $\lambda_\phi$ defined above, not the separate vacuum capping isomorphism of $F$. By [F4–F5], the Hodge line and nodal divisor live on the stated universal stable-curve family and its tangent-frame pullback. The anomaly-equipped version additionally supplies an action of $\alpha A_\Lambda(-\widetilde\Delta)$ whose central copy of $\mathcal O$ acts by multiplication, together with the stated monodromy and sewing identifications. Its parameter therefore constrains this same algebra $F$. Connectedness of the nonempty homotopy fiber implies that every mapping class has a lift in $\operatorname{Aut}_{Q(T)}(\widetilde\Sigma)$: a mapping class changes the identifying arrow to $\Sigma$, and an arrow in that fiber back to the original lift supplies the required lift. Two lifts differ by an element of $K_{\widetilde\Sigma}$, which acts by a scalar by the additional axiom. Their images consequently agree modulo invertible scalars, and composition of lifts gives a projective action. Locally a splitting of the Atiyah extension induces a connection; changing the splitting adds a scalar one-form, and its curvature is scalar because $\nabla$ preserves brackets. The resulting projective connection is therefore well defined and flat off the nodal boundary. The identification with its projective monodromy is required as data, with the VOA convention $\alpha=c/2$. The general modular-functor axioms alone do not imply scalar kernel action. This checks the structure being defined and asserts no existence theorem for a VOA. [given, A1, A2, F4, F5, step 2.1, algebra]

4.1 To see why that domain cannot be replaced by the whole source frame torsor, take $g=0,n=3$ and, over a small disk with coordinate $t$, the four marks $x=0,1,\infty,t$ on $\mathbb P^1$ for $t\ne0$. Its stable extension has at $t=0$ a rational tail carrying the marks $0,t$ and its attaching node. Near the retained mark $0$, the stable family has a chart $(u,t)$ with $x=tu$, in which the two tail marks are $u=0,1$ and $\partial_u$ is a nonzero relative tangent frame. Forgetting the last mark contracts this tail and gives the constant three-pointed curve with retained mark $x=0$. For $t\ne0$ the pushed-forward frame is $t\partial_x$; every holomorphic extension agreeing with it has value zero at $t=0$, and hence cannot lie in the nonzero-frame torsor. The other marked frames can be chosen nonzero near their disjoint sections throughout. This is a family-level obstruction to the global framed formula, independently of any VOA. The definition preserves full topological capping and all stable-curve bundles, while specifying precisely which ordinary framed pullback expresses their vacuum compatibility. [given, F4, F5, step 2.2, construct, algebra] ∎

## Proof status

The source-compatible structure definition is local. Existence of finite-dimensional coinvariant fibers, the projective connection, and coherent sewing for a particular VOA belongs to a separate theorem and is not implied here.
