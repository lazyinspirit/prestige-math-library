---
id: "def-double-mapping-cylinder-homotopy-pushout-and-path-space-homotopy-pullback"
kind: "definition"
title: "Double-mapping-cylinder homotopy pushout and path-space homotopy pullback"
status: published
origin: "pipeline"
proof_strategy: direct
pipeline_run: "phase-2-next-17"
deps: ["def-compactly-generated-conventions-for-based-homotopy","def-mapping-cylinder-and-mapping-cone","lem-interval-exponential-law-and-quotient-homotopies","lem-compact-generation-preserves-the-cylinder-and-closed-pushouts","lem-kification-compact-tests-and-finite-constructions","lem-weak-hausdorff-diagonals-and-closed-quotients"]
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: May, A Concise Course in Algebraic Topology, Chapter 10 §7 double mapping
        cylinder
      url: https://math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf
    - title: Rezk, Proof of the Blakers--Massey theorem, §3
      url: https://rezk.web.illinois.edu/freudenthal-and-blakers-massey.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
---

## Definition

Let $f:A\to B$ and $g:A\to C$ be continuous maps of CGWH spaces. Their **double-mapping-cylinder homotopy pushout** is the model
$$P=k\bigl((B\amalg(A\times I)\amalg C)/((a,0)\sim f(a),\ (a,1)\sim g(a))\bigr).$$
Write $u:B\to P$ and $v:C\to P$ for the structure maps, and $h:A\times I\to P$ for $h(a,t)=[a,t]$. In fact this ordinary quotient is already CGWH, as verified below.

For continuous $u:B\to P$ and $v:C\to P$, their **path-space homotopy pullback** is the model
$$B\times^h_P C=k\{(b,\omega,c)\in B\times C(I,P)\times C:\omega(0)=u(b),\ \omega(1)=v(c)\},$$
where the braces first have the ordinary subspace topology, $C(I,P)$ is the kified interval mapping space, and the outer $k$ gives the compactly generated topology.

For the double-mapping-cylinder structure maps there is a canonical comparison
$$\eta:A\longrightarrow B\times^h_P C,\qquad \eta(a)=(f(a),h(a,-),g(a)).$$
For $a_0\in A$, base the target at the actual triple $\eta(a_0)$. Then $\eta$ is based. The endpoints $u(f(a_0))$ and $v(g(a_0))$ need not coincide in $P$; its intervening cylinder path, not an assumed equality of these endpoints, is part of the target basepoint. These constructions and maps are continuous and choice-free.

## Facts & Assumptions

[F1] [[def-compactly-generated-conventions-for-based-homotopy]] defines $k$, CGWH spaces, k-products and the mapping-space topology. [[def-mapping-cylinder-and-mapping-cone]] fixes the unreduced attachment convention used at both ends.

[F2] [[lem-interval-exponential-law-and-quotient-homotopies]] gives continuous evaluation and the interval exponential correspondence, including kified mapping spaces for CG parameters.

[F3] [[lem-compact-generation-preserves-the-cylinder-and-closed-pushouts]] proves that ordinary cylinders of CGWH spaces and pushouts along their closed subspaces are CGWH, with the endpoint target a closed embedded subspace.

[F4] [[lem-kification-compact-tests-and-finite-constructions]] gives finite k-products, finite coproducts, closed subspaces, and the equivalence of continuity into a space and its kification for a CG source.

[F5] [[lem-weak-hausdorff-diagonals-and-closed-quotients]] gives closed k-diagonals and CGWH mapping spaces, finite k-products and closed subspaces.

## Verification

**Given:** The displayed maps and CGWH spaces; for the based assertion a specified $a_0\in A$.

1.1 The subspace $A\times\{0,1\}$ is closed in the ordinary CGWH cylinder $A\times I$ by [F3]. It is the coproduct of two copies of $A$ and hence CGWH by [F4, F5]. Map it to the CGWH coproduct $B\amalg C$ by $(a,0)\mapsto f(a)$ in its $B$ summand and $(a,1)\mapsto g(a)$ in its $C$ summand. These formulas are continuous on the two clopen endpoint pieces. Applying [F3] to this one closed pushout gives the ordinary quotient in the definition, already CGWH. Kification therefore does not change it. The quotient maps restricted to $B,C,A\times I$ give continuous $u,v,h$, with the pointwise endpoint identities $h(a,0)=u(f(a))$ and $h(a,1)=v(g(a))$. This constructs the model without treating either original map $f,g$ as an inclusion. [F1, F3, F4, F5, given]

1.2 For arbitrary $u,v$ as in the pullback definition, put $R=B\times_k C(I,P)\times_k C$. It is CGWH by [F4, F5], since $C(I,P)$ is CGWH by [F5]. Evaluation at each endpoint is continuous by [F2]. The two continuous maps from $R$ to $P\times_k P$ sending a triple to $(u(b),\omega(0))$ and to $(v(c),\omega(1))$ therefore have closed inverse images of the k-diagonal of $P$, by [F5]. Their intersection $D$ is a closed CGWH subspace of $R$. It has exactly the underlying set specified for $B\times^h_P C$. [F2, F4, F5, given]

2.1 The topology on $D$ is precisely the kification of the stated ordinary subspace. Let $Q_0$ denote that ordinary subspace of $B\times C(I,P)\times C$. Its coordinates make the map $kQ_0\to R$ continuous by the product and CG-source criteria of [F4], and it lands in $D$, hence is continuous into that subspace. Conversely the continuous coordinates of $D\to R$ give a continuous map from $D$ to the ordinary product, landing in $Q_0$. Thus $D\to Q_0$ is continuous. Since $D$ is CG by step 1.2, [F4] lifts this map continuously to $kQ_0$. These maps are the identity on the underlying triples in both directions, so they are inverse homeomorphisms. This proves both the claimed topology and the CGWH property of the homotopy-pullback model. [F4, F5, step 1.2]

2.2 For the structure maps from step 1.1, the continuous cylinder map $h:A\times I\to P$ has continuous adjoint $a\mapsto h(a,-)$ into $C(I,P)$ by [F2], since $A$ is CG. Together with continuous $f,g$, this defines a continuous map into the ordinary triple product. Its values satisfy both endpoint equations by step 1.1, so it factors continuously into $Q_0$. The CG-source criterion of [F4] makes it continuous into $kQ_0=B\times^h_P C$, which is exactly $\eta$. No path is selected between arbitrary endpoints: its middle coordinate is the given cylinder track. [F2, F4, step 1.1]

3.1 At $a_0$ the displayed formula gives exactly $\eta(a_0)$, so the comparison is based with the specified target point. This point contains a path and two endpoints, not a single common point of $P$. If $A$ is empty, the pushout is $B\amalg C$, and the comparison is the unique map from the empty space; no basepoint clause is asserted. If $A$ is nonempty, existence of $f,g$ makes $B,C$ nonempty and each $\eta(a)$ supplies its own pullback point. Zero or one available paths between other endpoints impose no extra existence assumption on this subspace definition. Constant maps and singleton source or target spaces satisfy the same endpoint formulas. Both interval endpoints are checked in step 1.1; no homotopy group or degree convention is involved. Quotients, coordinate products, closed equality sets, and currying specify every map directly, so the construction uses no choice principle. [F1, F2, F4, step 1.1, step 2.1, step 2.2] ∎
