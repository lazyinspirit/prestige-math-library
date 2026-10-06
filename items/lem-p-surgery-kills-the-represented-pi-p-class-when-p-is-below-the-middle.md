---
id: "lem-p-surgery-kills-the-represented-pi-p-class-when-p-is-below-the-middle"
kind: "lemma"
title: "p-surgery kills the represented pi-p class below the middle dimension"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 5
deps: ["def-surgery-trace-cobordism", "lem-outgoing-boundary-of-a-handle-attachment-trades-the-disk-factors", "thm-upper-boundary-of-the-surgery-trace-is-the-surged-manifold", "lem-attaching-a-single-cell-kills-the-represented-homotopy-class", "lem-handle-attachments-are-relative-cell-attachments-up-to-homotopy", "lem-product-cobordisms-have-critical-point-free-presentations", "def-relative-homotopy-group", "thm-long-exact-sequence-of-relative-homotopy-groups", "lem-high-relative-cells-do-not-change-lower-homotopy", "def-countable-choice", "thm-weak-whitney-proper-embedding-theorem", "thm-euclidean-tubular-neighbourhood-theorem", "thm-smooth-partitions-of-unity-exist-on-manifolds", "prop-relative-cw-inclusions-are-cofibrations"]
justified_by: []
aliases: []
proof_strategy: "the cell model of the trace on both sides, combined through the exact sequence of the pair"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  precheck: "pass"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Allen Hatcher, Algebraic Topology (2002), university-hosted full-text copy"
      url: "https://math.uchicago.edu/~farb/algtop2023/Hatcher.pdf"
      locator: "Section 4G, Propositions 4G.1–4G.2 and Corollary 4G.3, printed pp. 458–459 (the complete mapping-cylinder and partition-of-unity arguments), PDF page 233"
    - title: "Wolfgang Lück, A Basic Introduction to Surgery Theory (lecture notes, Münster, 27 October 2004)"
      url: "https://him-lueck.uni-bonn.de/data/ictp.pdf"
      locator: "Chapter 3 §3.4.1, printed p. 72 (pi_l(f)=pi_l(f') for l<=k and an epimorphism pi_{k+1}(f)->pi_{k+1}(f') whose kernel contains omega, provided 2(k+1)<=n; the inclusion M-int(im q)->M is (n-k-1)-connected)"
    - title: "Andrew Ranicki, Algebraic and Geometric Surgery (Oxford Mathematical Monographs, 2002; electronic copy)"
      url: "https://math.uchicago.edu/~shmuel/tom-readings/ranicki-intro"
      locator: "Chapter 10 §10.1, Proposition 10.2, printed pp. 195-196 (the trace F is the trace of the dual (m-n-1)-surgery, with pi_i(F)=pi_i(f) for i<=n and pi_{n+1}(f)/<x> for i=n+1); §10.4, Proposition 10.25 (i), printed pp. 210-211"
    - title: "C. T. C. Wall, Differential Topology (Cambridge Studies in Advanced Mathematics 156, Cambridge University Press 2016)"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/Wall.pdf"
      locator: "Chapter 7 §7.2, Theorem 7.2.1 with proof, printed pp. 199-200 (the dual handle indices are at least m+1-k, so the inclusion M_i->N_i is (m-k)-connected)"
---

## Statement

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]). Let $M$ be a closed
connected smooth $m$-manifold, $1\le p\le m-1$, $q=m-p$, and let $\varphi$ be a
framed embedded surgery sphere whose underlying sphere represents the class
$z\in\pi_p(M)$ . Suppose
$$p\le q-2,\qquad\text{equivalently}\qquad 2p+2\le m .$$
Let $W_\varphi$ be the trace and $M_\varphi$ the surgered manifold. Then:

(i) the map $\pi_i(M)\to\pi_i(M_\varphi)$ is an isomorphism for
$1\le i\le p-1$ and a surjection for $i=p$, induced through the
identifications of $M$ and $M_\varphi$ with the two faces of the trace;

(ii) the class $z$ lies in the kernel of $\pi_p(M)\to\pi_p(M_\varphi)$; more
precisely, with $\partial:\pi_{p+1}(W_\varphi,M)\to\pi_p(M)$ the connecting
homomorphism of the trace pair, the kernel equals $\operatorname{im}(\partial)$,
a subgroup of $\pi_p(M)$ containing $z$, and
$\pi_p(M_\varphi)\cong\pi_p(M)/\operatorname{im}(\partial)$;

(iii) if $M$ is simply connected, then the kernel is the subgroup generated
by $z$ (cyclic, possibly finite, and trivial when $z=0$), and
$$\pi_p(M_\varphi)\cong\pi_p(M)/\langle z\rangle .$$

The case $p=0$ concerns components and is not a claim about a group $\pi_0$.
Outside the range $p\le q-2$ the statement may fail in degree $p$, and no claim
is made there.

## Facts & Assumptions

**Given:** the closed connected smooth $m$-manifold $M$, integers $1\le p\le m-1$ and $q=m-p$ with $p\le q-2$, a framed embedded surgery sphere $\varphi$ whose underlying sphere represents $z\in\pi_p(M)$, the trace $W_\varphi$ and the surgered manifold $M_\varphi$.

[F1] [[lem-handle-attachments-are-relative-cell-attachments-up-to-homotopy]]: if $N'$ is obtained from a smooth manifold $N$ with boundary by attaching a rounded $k$-handle along an embedding $f:S^{k-1}\times D^{\dim N-k}\to\partial N$, then the pair $(N',N)$ is homotopy equivalent, relative to $N$, to the pair obtained from $N$ by attaching one $k$-cell along the core embedding $f_0$.

[F2] [[lem-product-cobordisms-have-critical-point-free-presentations]]: the cylinder $M\times[0,1]$ has the empty handle presentation relative to $M\times\{0\}$, so the trace has exactly one handle, the attached $(p+1)$-handle.

[F3] [[thm-upper-boundary-of-the-surgery-trace-is-the-surged-manifold]]: the outgoing face is identified with $M_\varphi$, and there are homotopy equivalences of pairs relative to the indicated faces, $(W_\varphi,M)\simeq(M\cup_{\varphi_0}D^{p+1},M)$ and $(W_\varphi,M_\varphi)\simeq(M_\varphi\cup_\beta D^q,M_\varphi)$, where $\beta$ is the belt-sphere embedding. The characteristic disks include collar paths to the respective faces.

[F4] [[lem-attaching-a-single-cell-kills-the-represented-homotopy-class]]: for a path-connected based CW complex $X$, $p\ge1$, a based map $f:S^p\to X$ with class $\alpha$, and $Y=X\cup_fD^{p+1}$, the map $\pi_i(X)\to\pi_i(Y)$ is an isomorphism for $1\le i\le p-1$ and a surjection for $i=p$; the connecting homomorphism $\partial:\pi_{p+1}(Y,X)\to\pi_p(X)$ sends the class of the characteristic disk to $\pm\alpha$, so $\alpha\in\ker(\pi_p(X)\to\pi_p(Y))=\operatorname{im}(\partial)$; and if $X$ is simply connected then $\pi_{p+1}(Y,X)$ is infinite cyclic on the class of the characteristic disk and $\pi_p(Y)\cong\pi_p(X)/\langle\alpha\rangle$.

[F5] [[lem-high-relative-cells-do-not-change-lower-homotopy]]: for a CW pair $(Z,A)$ all of whose cells outside $A$ have dimension at least $n\ge1$, the map $\pi_i(A,a)\to\pi_i(Z,a)$ is an isomorphism for $1\le i<n-1$ and a surjection for $i=n-1\ge1$.

[F6] [[thm-long-exact-sequence-of-relative-homotopy-groups]]: for every based pair $(Z,A,x_0)$ the relative homotopy sequence is exact; in particular $\ker(\pi_p(A)\to\pi_p(Z))=\operatorname{im}(\partial)$ for the connecting map $\partial:\pi_{p+1}(Z,A)\to\pi_p(A)$.

[F7] Under $\mathrm{AC}_\omega$, [[thm-weak-whitney-proper-embedding-theorem]] embeds a smooth manifold properly in Euclidean space, and [[thm-euclidean-tubular-neighbourhood-theorem]] gives an open tube with a normal radial deformation retraction. On that open tube, [[thm-smooth-partitions-of-unity-exist-on-manifolds]] supplies partitions. The disk-boundary inclusions are cofibrations by [[prop-relative-cw-inclusions-are-cofibrations]].


## Proof

**Given:** the objects and hypotheses of the statement.

1.1 To supply the CW prerequisite under the stated choice assumption, use [F7] to replace each face by an open Euclidean tube $U$ of the same homotopy type. Cover $U$ by all balls with rational centres and rational positive radii whose closures lie in $U$. This is a countable open cover with convex finite intersections; contract each nonempty intersection to its first rational point in a fixed enumeration. A supplied subordinate partition makes the projection from its Čech realization to $U$ a homotopy equivalence: its section is the partition barycentre and each fibre contracts linearly to that section. Collapsing the convex intersection factors identifies this realization up to homotopy with the nerve, by the simplex-by-simplex mapping-cylinder argument of Hatcher, section 4G, Propositions 4G.1–4G.2 and Corollary 4G.3. There are countably many simplices, so at most countable choice is spent by that argument. The nerve is a CW complex (its simplex cells are closure-finite with the weak realization topology). This supplies a based CW model of each face; a homotopy inverse carries the attaching sphere to a map into that model. Homotopic attaching maps have equivalent adjunction spaces: a homotopy is inserted on a boundary annulus of the attached disk, and its reverse gives the inverse; their composites contract the two annuli, fixing the base. The same construction transports attachments along the model equivalence. Thus the two cell models of [F3] may be replaced by actual relative CW pairs, preserving the indicated face groups and characteristic-disk boundary classes. By [F3] and [F1] the pair $(W_\varphi,M)$ is homotopy equivalent, relative to $M$, to the pair obtained from $M$ by attaching one $(p+1)$-cell along the core embedding $\varphi_0$, so the pair $\pi_i(M)\to\pi_i(W_\varphi)$ is the map of [F4] for the attachment along $\varphi_0$. Hence $\pi_i(M)\to\pi_i(W_\varphi)$ is an isomorphism for $1\le i\le p-1$ and a surjection for $i=p$, and with $\partial_M:\pi_{p+1}(W_\varphi,M)\to\pi_p(M)$ the connecting homomorphism of the pair, the class $z$ of the underlying sphere lies in $\ker(\pi_p(M)\to\pi_p(W_\varphi))=\operatorname{im}(\partial_M)$. [F1, F2, F3, F4, F6, F7]

1.2 The $q$-cell cannot join or create components because $q\ge p+2\ge3$, so the outgoing face is connected since the trace is connected. Fix a basepoint in each face and a path between them through the trace; all comparisons use that specified path (there is no canonical homomorphism independent of basepoint transport). Dually, [F3] and [F1] express $(W_\varphi,M_\varphi)$ as the pair obtained from $M_\varphi$ by attaching one $q$-cell along the belt-sphere embedding $\beta$, relative to $M_\varphi$. Since $q\ge p+2$, the new cell has dimension at least $p+2$, so [F5] with $n=q$ gives that $\pi_i(M_\varphi)\to\pi_i(W_\varphi)$ is an isomorphism for $1\le i\le q-2$, in particular for $1\le i\le p$, and a surjection for $i=q-1$. [F1, F3, F5]

2.1 Combination. For $1\le i\le p-1$ both maps $\pi_i(M)\to\pi_i(W_\varphi)$ and $\pi_i(M_\varphi)\to\pi_i(W_\varphi)$ are isomorphisms, so $\pi_i(M)\to\pi_i(M_\varphi)$ is an isomorphism; for $i=p$ the first map is a surjection and the second an isomorphism, so the composite $\pi_p(M)\to\pi_p(M_\varphi)$ is a surjection. This proves (i). [step 1.1, step 1.2]

2.2 Kernel in degree $p$. Since $\pi_p(M_\varphi)\to\pi_p(W_\varphi)$ is injective, the kernel of $\pi_p(M)\to\pi_p(M_\varphi)$ equals the kernel of $\pi_p(M)\to\pi_p(W_\varphi)$, which is $\operatorname{im}(\partial_M)$ by [F6]; this is a subgroup of $\pi_p(M)$ containing $z$, and consequently $\pi_p(M_\varphi)\cong\pi_p(M)/\operatorname{im}(\partial_M)$ by the first isomorphism theorem. This proves (ii). [F3, F6, step 1.1, step 1.2, algebra]

3.1 Simply connected case. If $M$ is simply connected, apply the third clause of [F4] to the cell attachment model of step 1.1: the relative group $\pi_{p+1}(M\cup_{\varphi_0}D^{p+1},M)$ is infinite cyclic on the class of the characteristic disk, and the connecting homomorphism has image the subgroup generated by $z$, which is cyclic and can be finite when $z$ has finite order. Transporting along the homotopy equivalence of pairs of step 1.1, the kernel $\operatorname{im}(\partial_M)$ is the subgroup generated by $z$, cyclic, possibly finite, and trivial when $z=0$, and step 2.2 gives $\pi_p(M_\varphi)\cong\pi_p(M)/\langle z\rangle$. This proves (iii). [F1, F3, F4, step 2.2]

4.1 The hypothesis $p\le q-2$ is exactly $2p+2\le m$; it is used in step 1.2 to make the dual inclusion an isomorphism in degree $p$. Beyond that range the dual cell can meet degree $p$ and the conclusion of (i) may fail, so no statement is made there. [step 1.2, algebra] ∎
