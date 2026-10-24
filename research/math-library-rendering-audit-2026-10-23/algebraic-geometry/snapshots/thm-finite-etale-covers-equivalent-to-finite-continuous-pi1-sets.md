---
id: thm-finite-etale-covers-equivalent-to-finite-continuous-pi1-sets
kind: theorem
title: "Finite étale covers are equivalent to finite continuous étale fundamental group sets"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - def-axiom-of-choice
  - def-etale-fundamental-group-and-fibre-functor
  - lem-finite-etale-galois-refinements-and-quotients
  - thm-tychonoff
proof_strategy: direct
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    scope: "Whole authored item, including statement or definition, every proof or verification step, and used direct supplier interfaces; completed prior Step5 reader/adjudicator evidence reconciled to the current mathematics. Transitive supplier proofs were not audited in full."
    delegated_by: "owner via tools/autopilot (frontier-38-owner-30)"
    evidence:
      - "research/frontier-38-owner-30-reader-30.md"
      - "research/frontier-38-owner-30-alpha-batch-30-5a.md"
      - "research/frontier-38-owner-30-step5-hash-30-post.json"
    reviewed_raw_sha256: "e731fc4111ee5a640d2766b3ee055e2ddc7884c818a4dc42e4f04667705ded3f"
    content_sha256: "d54445e3671d084aa2722a7f706d50f33664bb60bad16722b5f57e6acdadbaf2"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "SGA 1, Exposé V §§3–5, especially Theorem 4.1"
      url: https://arxiv.org/pdf/math/0206203
    - title: "Stacks Project, Fundamental Groups of Schemes §§3, 5–6"
      url: https://stacks.math.columbia.edu/download/pione.pdf
---

## Statement

Assume AC. Let $X$ be a connected scheme and fix an algebraically closed geometric basepoint $\bar x$. Its fibre functor gives an equivalence
$$\operatorname{FEt}(X)\simeq\operatorname{FinSet}_{\pi_1^{\mathrm{et}}(X,\bar x)}$$
to finite sets with continuous left action of $\pi_1^{\mathrm{et}}(X,\bar x)$. The group is profinite. Connected nonempty covers correspond to transitive nonempty actions. This applies in particular to connected locally Noetherian schemes and connected schemes of finite type over a field; neither additional assumption is needed for this classification.

## Facts & Assumptions

**Given:** AC, connected $X$, geometric basepoint $\bar x$, and $F=F_{\bar x}$.

[F1] The fibre functor, group and its product topology are defined in [[def-etale-fundamental-group-and-fibre-functor]].

[F2] Morphisms between finite étale covers are finite étale, $F$ is faithful and conservative, and a connected-source map is determined by one fibre value. Covers have finite connected decompositions and connected Galois refinements; all finite subgroup quotients and contracted covers exist ([[lem-finite-etale-galois-refinements-and-quotients]]).

[F3] Under AC, a product of compact spaces is compact ([[thm-tychonoff]], [[def-axiom-of-choice]]). Applied below only to finite discrete sets, this gives existence of points in a cofiltered inverse system of nonempty finite sets and surjectivity of its projections when all transition maps are surjective.

## Proof

1.1 Choose a set of pointed representatives $(T_i,t_i)$ for the connected Galois covers. Write $i\ge j$ when there is a pointed map $u_{ij}:T_i\to T_j$; it is unique by [F2]. The relation is a directed partial order up to pointed isomorphism: antisymmetry follows because surjections in both directions give equal finite degrees, hence degree-one maps and isomorphisms; directedness follows by taking the component of $T_i\times_XT_j$ through $(t_i,t_j)$ and then a pointed Galois refinement of it. A Galois refinement of a disconnected cover trivializes all its components at once by the ordered-fibre construction in [F2]. Thus for every finite cover $Y$, evaluation yields a natural bijection $$\mathop{\mathrm{colim}}_i\operatorname{Hom}_X(T_i,Y)\longrightarrow F(Y),\qquad a\longmapsto a(t_i).$$ It is onto by such a trivializing refinement. If two maps evaluate to the same point, take a common refinement and apply the connected-source uniqueness in [F2]; they are equal in the colimit. [F2, construct]

2.1 Put $H_i=\operatorname{Aut}_X(T_i)$. For $i\ge j$ and $h\in H_i$, simple transitivity gives a unique $h_j\in H_j$ with $h_j(t_j)=u_{ij}(h(t_i))$. Both maps $h_j u_{ij}$ and $u_{ij}h$ agree at $t_i$, hence agree everywhere by [F2]. This defines a homomorphism $H_i\to H_j$. It is surjective because $u_{ij}$ is surjective on the geometric fibre. The maps compose compatibly. Let $H=\varprojlim_i H_i$ and $G=H^{\mathrm{op}}$. The inverse limit is a closed subgroup of a product of finite discrete groups, hence compact, Hausdorff and totally disconnected by [F3]. Its projections onto $H_i$ are surjective: imposing any prescribed coordinate together with finitely many compatibility constraints can be solved at a common upper index, and compactness makes the resulting family of closed conditions simultaneously satisfiable. [F2, F3, step 1.1, construct]

3.1 A compatible family $h=(h_i)$ acts on the colimit in step 1.1 by precomposition $a\mapsto a h_i$. Precomposition reverses multiplication, so this gives a homomorphism $G\to\operatorname{Aut}(F)$. Its restriction on $F(T_i)$, identified with $H_i$ by evaluation at $t_i$, is right multiplication by $h_i$. Conversely, any natural automorphism $\gamma$ determines $h_i\in H_i$ by $h_i(t_i)=\gamma_{T_i}(t_i)$. Naturality for $u_{ij}$ makes these compatible. Naturality for every map $a:T_i\to Y$ forces $\gamma_Y(a(t_i))=a(h_i(t_i))$, which determines $\gamma$ on every fibre by step 1.1. Thus $G\cong\operatorname{Aut}(F)$. This is a topological isomorphism: each finite fibre is represented at a single trivializing refinement, so its action factors through $H_i^{\mathrm{op}}$; conversely the action on $F(T_i)$ detects the entire $i$th coordinate. Hence both topologies have the same finite-coordinate neighbourhood basis. In particular the group in [F1] is profinite. [F1, F2, step 1.1, step 2.1, algebra]

4.1 The group acts transitively on the fibre of every nonempty connected cover. Indeed choose a pointed Galois refinement surjecting onto that cover; the projection $H\to H_i$ is onto by step 2.1, and its regular action on $F(T_i)$ is transitive, so the induced action on the target fibre is transitive. For a general cover its connected decomposition is carried to its orbit decomposition: the group preserves every component by naturality for its inclusion, and acts transitively within it. [F2, step 2.1, step 3.1]

4.2 A continuous action on a finite set $E$ has an open kernel: intersect its finitely many open point stabilizers. By the inverse-limit topology of step 3.1, that kernel contains the kernel of $G\to H_i^{\mathrm{op}}$ for some $i$; finitely many coordinate constraints can be combined at one upper index. The projection is onto by step 2.1, so the action factors through $H_i^{\mathrm{op}}$. The contracted-cover construction in [F2] gives a finite étale cover with precisely that action on its fibre. This proves essential surjectivity. [F2, step 2.1, step 3.1, construct]

5.1 Let $q:F(Y)\to F(Z)$ be equivariant. Its graph is an invariant subset of $F(Y\times_XZ)$, and hence, by step 4.1, a union of fibres of connected components of $Y\times_XZ$. Take the corresponding open and closed union of components $W$. Its projection to $Y$ is bijective on the fibre and hence an isomorphism by [F2]. The composite $Y\cong W\to Z$ has fibre map $q$. Faithfulness follows from [F2]; therefore the functor is fully faithful. [F2, step 4.1, construct]

6.1 Steps 4.2 and 5.1 prove the equivalence, step 3.1 proves profiniteness, and step 4.1 identifies the connected covers. AC enters in choosing the pointed set of representatives and through [F2], and its additional compactness use is exactly step 2.1 via [F3]. This proof supplies reconstruction explicitly and does not invoke an unproved Galois-category theorem or a universal cover as an actual finite scheme. [F1, F2, F3, step 3.1, step 4.1, step 5.1, step 4.2] ∎
