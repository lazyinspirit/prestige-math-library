---
id: "lem-relative-homotopy-compares-with-the-cw-quotient-in-the-connectivity-range"
kind: "lemma"
title: "Relative homotopy compares with the CW quotient in the connectivity range"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["def-n-connected-cw-pair","def-n-connected-space-and-n-connected-map","def-relative-homotopy-group","lem-cellular-mapping-cylinders-and-relative-cylinders-are-cw-complexes","lem-cellular-attachments-with-finite-boundary-support-form-a-cw-complex","def-adjunction-cone-suspension","thm-long-exact-sequence-of-relative-homotopy-groups","thm-homotopy-excision","lem-cw-quotients-and-collapse-of-a-contractible-subcomplex","lem-weak-equivalences-of-pairs-induce-isomorphisms-on-relative-homotopy"]
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Hatcher, Algebraic Topology, Proposition4.28 p364; full CW and quotient
        comparisons supplied here
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

Let $(X,A)$ be an $r$-connected CW pair with $r\ge0$, and suppose $A$ is $s$-connected with $s\ge0$. For every $a\in A$, the ordinary quotient induces
$$\pi_i(X,A,a)\longrightarrow\pi_i(X/A,*),\qquad *=A/A,$$
bijectively for $1\le i\le r+s$ and surjectively for $i=r+s+1$. These bijections are group isomorphisms for $i\ge2$ and pointed bijections for $i=1$. No choice principle is required.

## Facts & Assumptions

[F1] [[def-n-connected-cw-pair]] gives relative connectivity including components. [[def-n-connected-space-and-n-connected-map]] says that $s$-connectedness for $s\ge0$ includes nonemptiness and path-connectedness. [[def-relative-homotopy-group]] identifies relative representatives with subspace a point with absolute based cubes.

[F2] [[lem-cellular-mapping-cylinders-and-relative-cylinders-are-cw-complexes]] constructs the ordinary mapping cylinder of a cellular map and proves its retraction weak at all basepoints. [[lem-cellular-attachments-with-finite-boundary-support-form-a-cw-complex]] assembles CW unions along subcomplexes from the supplied cells and boundary maps.

[F3] [[def-adjunction-cone-suspension]] defines the ordinary cone as $(A\times I)/(A\times\{1\})$ for nonempty $A$.

[F4] [[thm-long-exact-sequence-of-relative-homotopy-groups]] gives the pair sequence, with exact pointed tail in degree one.

[F5] [[thm-homotopy-excision]] gives isomorphism below the sum of the two pair connectivities and surjection at that sum, with positive indices and connected common subcomplex.

[F6] [[lem-cw-quotients-and-collapse-of-a-contractible-subcomplex]] gives the CW quotient and makes collapse of a contractible subcomplex a weak equivalence. [[lem-weak-equivalences-of-pairs-induce-isomorphisms-on-relative-homotopy]] gives relative bijections when both ambient and subspace maps are weak equivalences.

## Proof

**Given:** The CW pair and $r,s$. Fix any $a\in A$, which is possible since $A$ is nonempty by [F1].

1.1 Apply [F2] to the constant cellular map $A\to\{v\}$, with empty fixed subcomplex. Its ordinary cylinder, after reversing the interval coordinate, is exactly the cone $CA$ of [F3], with $A$ as its free-end subcomplex and $v$ as apex. It is CW, and its retraction to $v$ induces a component bijection and isomorphisms on all positive groups at every basepoint. In particular $CA$ is path-connected and has trivial positive homotopy groups. Its explicit contraction is $[x,u]\mapsto[x,u+t(1-u)]$, from the identity to the apex; quotient-times-interval continuity is included in [F2]. [F2, F3, given]

2.1 Build $Y=X\cup_A CA$ from $X$ by adjoining the apex vertex and then the remaining cells of $CA\setminus A$. Their boundary maps have finite support and are cellular, so [F2] gives a CW complex containing $X$ and $CA$ as subcomplexes with intersection exactly $A$. Its map-out test is continuity on $X$ and $CA$ with agreement on $A$, since these tests are precisely their supplied characteristic-disk tests. Thus this is the ordinary amalgamated union, not a different topology on that set. [F2, step 1.1]

2.2 The pair $(CA,A)$ is $(s+1)$-connected. Component-surjectivity holds because $CA$ is path-connected and $A$ nonempty. In the pointed tail of [F4], $\pi_0(A)\to\pi_0(CA)$ is bijective since both spaces are path-connected. Thus every relative degree-one class is in the image of $\pi_1(CA)$, which is zero by step 1.1. For $2\le j\le s+1$, the adjacent absolute cone groups are zero, and [F4] identifies $\pi_j(CA,A,a)$ with $\pi_{j-1}(A,a)$; the latter is zero by $s$-connectedness. This range is empty for $s=0$. These calculations hold at the specified arbitrary point $a$ and also at every other point of $A$. [F1, F4, step 1.1]

3.1 Apply [F5] to the union in step 2.1, whose common subcomplex $A$ is nonempty path-connected. Its two pair connectivities are $r$ for $(X,A)$ and $s+1$ for $(CA,A)$. We obtain $$e_*:\pi_i(X,A,a)\longrightarrow\pi_i(Y,CA,a)$$ bijective for $1\le i<r+s+1$ and surjective for $i=r+s+1$. All the hypotheses, including the endpoint when $r=s=0$, are covered by steps 1.1–2.2. [F1, F5, step 2.1, step 2.2]

3.2 Collapse $CA$ inside $Y$. It is a nonempty contractible subcomplex by steps 1.1–2.1, so [F6] makes $p:Y\to Y/CA$ a weak equivalence. The restriction $CA\to\{*\}$ is also weak by step 1.1. Hence the pair comparison of [F6] induces a bijection $$p_*:\pi_i(Y,CA,a)\longrightarrow\pi_i(Y/CA,*,*)$$ in every positive degree. The relative target classes are precisely absolute based cubes by [F1]; no nontrivial boundary values remain. For $i\ge2$ the comparison preserves the group operations, while at $i=1$ this is an identification of the underlying pointed sets. [F1, F6, step 1.1, step 2.1]

4.1 There is a canonical homeomorphism $Y/CA\cong X/A$. Set-theoretically it retains exactly the points of $X\setminus A$ and the one collapsed point. A function out of $Y/CA$ is continuous exactly when its composite on $Y$ is continuous and constant on $CA$. By the union map-out test in step 2.1, this says exactly that its restriction on $X$ is continuous and constant on $A$, which is the quotient map-out criterion for $X/A$. Testing characteristic maps into the two-point open-set classifier, as in [F6], proves equality of the two topologies. Under this identification, $p|_X$ is the original quotient map $q:X\to X/A$. Consequently $p_*e_*=q_*$ on the cubical relative representatives. Combining steps 3.1 and 3.2 gives bijectivity for the integral indices $1\le i\le r+s$ and surjectivity at $r+s+1$, as claimed. [F1, F6, step 2.1, step 3.1, step 3.2]

5.1 For $r=s=0$ only the positive degree-one surjection is asserted, and step 3.1 gives it; no relative degree-zero group has been introduced. If $A=X$, both the relative source sets and the positive groups of the one-point quotient are trivial, consistent with every claimed range. A singleton $A$ and no relative cells are also allowed. Every cone endpoint and quotient value is fixed by its defining relation; the argument uses the arbitrary original basepoint $a$, which need not be a vertex. The cone contraction is explicit, its collapse uses choice-free HEP, and the excision theorem and relative weak comparison are choice-free. Therefore this entire comparison requires no AC, including for infinite CW complexes. [F1, F2, F5, F6, step 1.1, step 2.2, step 3.1, step 4.1] ∎
