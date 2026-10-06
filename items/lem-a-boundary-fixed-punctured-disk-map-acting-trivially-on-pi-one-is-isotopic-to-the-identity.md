---
id: lem-a-boundary-fixed-punctured-disk-map-acting-trivially-on-pi-one-is-isotopic-to-the-identity
kind: lemma
title: "A boundary-fixed punctured-disk homeomorphism acting trivially on the fundamental group is isotopic to the identity"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
dependency_level: 4
deps: [thm-alexander-contractibility-of-the-boundary-fixed-disk-homeomorphism-group, lem-trivial-action-on-standard-meridians-fixes-the-stem-arc-system-up-to-isotopy, thm-point-pushing-is-the-kernel-of-forgetting-a-puncture, def-point-pushing-homomorphism-for-a-puncture, lem-smooth-finite-point-motions-extend-to-boundary-fixed-disk-isotopies, thm-braid-group-is-the-boundary-fixed-mapping-class-group-of-the-punctured-disk, cor-pure-geometric-braids-are-the-fundamental-group-of-ordered-configurations, def-boundary-fixed-mapping-class-group-of-a-punctured-disk, def-axiom-of-choice, def-standard-meridians-of-a-punctured-disk, thm-choice-implies-dependent-implies-countable-choice]
justified_by: []
aliases: []
proof_strategy: induction
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "completed-independent-mathematical-review"
    date: 2026-10-03
    scope: "Complete item claim and mathematical body read in delegated Step 5a reader; evidence: research/frontier-38-owner-30-reader-15.md; immutable carrier: research/frontier-38-owner-30-step5-hash-15-post.json; exact saved draft bytes in git d90f26208 match that carrier after exclusion of the later judge stamp. Current content matches the saved carrier except publication status and verification metadata. Source and supplier coverage is limited to the report."
    delegated_by: "owner via tools/autopilot frontier-38-owner-30 reader-15 dispatch"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Benson Farb and Dan Margalit, A Primer on Mapping Class Groups, version 5.0 author draft, Theorem 1.12 relative form, printed pp. 43-44, and Lemma 2.1 (Alexander lemma), printed pp. 50-51"
      url: "https://web.archive.org/web/20111027114600id_/http://www.math.uchicago.edu/~margalit/mcg/mcgv50.pdf"
    - title: "Joan S. Birman and Tara E. Brendle, Braids: A Survey, section 1.3, author manuscript pp. 5-6"
      url: "https://www.math.columbia.edu/~jb/Handbook-21.pdf"
---

## Statement

Assume AC. Let $h\in\operatorname{Homeo}^+(D^2,\partial D^2)$ preserve $Q_n$
setwise and act as the identity on $\pi_1(D^2\setminus Q_n,d)$. Then $h$ is
isotopic to $\mathrm{id}_{D^2}$ relative to $\partial D^2$ and $Q_n$.

## Facts & Assumptions

**Given:** AC, the canonical configuration $Q_n$, and a boundary-fixed
homeomorphism $h$ preserving it setwise and inducing the identity on the
based fundamental group of $X=D^2\setminus Q_n$.

[F1] Trivial induced action fixes every puncture and gives, for every standard
stem, a homotopy on the compact square with fixed endpoints $d,q_i$, avoiding
all marked points at other arc parameters
([[lem-trivial-action-on-standard-meridians-fixes-the-stem-arc-system-up-to-isotopy]],
[[def-standard-meridians-of-a-punctured-disk]]).

[F2] Under AC, the kernel of forgetting $q_n$ in the pure mapping class group
is the image of $\operatorname{Push}_n:\pi_1(Y_n,q_n)\to\operatorname{PMod}(D^2,Q_n;\partial D^2)$,
where $Y_n=\operatorname{int}D^2\setminus\{q_1,\dots,q_{n-1}\}$.
The target of forgetting uses the actual truncation $Q'_n$, rather than the
canonical rank-$(n-1)$ configuration
([[thm-point-pushing-is-the-kernel-of-forgetting-a-puncture]]).

[F3] The point push of a loop $\gamma$ is represented by the inverse endpoint
of an ambient isotopy lifting its motion, and depends only on its based
homotopy class ([[def-point-pushing-homomorphism-for-a-puncture]]).

[F4] Smooth separated finite point motions extend to boundary-fixed disk
isotopies under countable choice, implied by AC
([[lem-smooth-finite-point-motions-extend-to-boundary-fixed-disk-isotopies]],
[[thm-choice-implies-dependent-implies-countable-choice]], [[def-axiom-of-choice]]).
Isotopy relative to a marked set is exactly equality of the corresponding
mapping classes ([[def-boundary-fixed-mapping-class-group-of-a-punctured-disk]]).

[F5] At $n=1$ the geometric braid group is trivial, and the boundary-fixed
one-puncture mapping class group is isomorphic to it
([[cor-pure-geometric-braids-are-the-fundamental-group-of-ordered-configurations]],
[[thm-braid-group-is-the-boundary-fixed-mapping-class-group-of-the-punctured-disk]]).

[F6] The boundary-fixed disk homeomorphism group is contractible by the
Alexander formula
([[thm-alexander-contractibility-of-the-boundary-fixed-disk-homeomorphism-group]]).

## Proof

1.1 *Base case and purity.* For $n=0$ the conclusion is the boundary-fixed disk Alexander contraction of [F6]; for $n=1$ it follows from [F5]. For $n\ge2$, [F1] first shows that $h$ fixes every $q_i$, so its class lies in the pure mapping class group and the forgetting map of [F2] applies. We prove the assertion by induction on $n$. [given, F1, F5, F6, base]

2.1 *Filling the last puncture and applying induction at the correct configuration.* Put $Z=D^2\setminus\{q_1,\dots,q_{n-1}\}$ and let $j:X\hookrightarrow Z$. The induced $j_*$ is surjective: any loop in $Z$ is homotopic rel $d$ to a finite polygonal loop avoiding the finite marked set, and a further small detour removes any passage through the single extra point $q_n$. The homotopy and detour stay in $Z$. Since $h_*j_*=j_*h_*$ and $h_*|\pi_1(X,d)=\operatorname{id}$, this surjectivity implies $h_*|\pi_1(Z,d)=\operatorname{id}$. To transport the truncation $Q'_n$ to the canonical rank-$(n-1)$ tuple $C=(c_j)$, use the explicit motion $q_j\mapsto(1+t/n)q_j+t/(4n)$, $j<n$, on the real axis; it ends at $c_j=(2j-n)/(4n)$, preserves order, and remains in the interior. Reparametrize smoothly to be constant near the time endpoints and apply [F4], giving a boundary-fixed endpoint homeomorphism $R$ with $R(Q'_n)=C$. The map $RhR^{-1}$ induces the identity on the fundamental group of the canonical $(n-1)$-punctured disk. Induction therefore makes its mapping class trivial; conjugating the isotopy back shows that $h$ is isotopic to the identity relative to the actual truncation $Q'_n$. Thus $[h]$ lies in the forgetting kernel of [F2]. [F4, step 1.1, ih, construct]

3.1 *An actual point-motion representative of the kernel.* By [F2], write $[h]=\operatorname{Push}_n([\gamma])$ for a loop $\gamma$ in $Y_n$ based at $q_n$. A compact loop avoiding the finite set of other marked points can be replaced in its based class by a finite polygonal loop, then rounded smoothly and made constant near the time endpoints; each replacement stays in small disks missing those points. Apply [F4] to this last-point motion and the constant motions of all the other points. It gives a jointly continuous ambient isotopy $H_t$ with $H_0=\operatorname{id}$, $H_t(q_j)=q_j$ for $j<n$, and $H_t(q_n)=\gamma(t)$. Put $k=H_1$. By [F3], $[k]=[h]^{-1}$ relative to the boundary and all $Q_n$, so $k_*=\operatorname{id}$ on $\pi_1(X,d)$: a marked-set isotopy restricts to a based homotopy on $X$, and the inverse class of $h$ also induces the identity. [F2, F3, F4, step 2.1, construct]

4.1 *The compact tether square detects the moving-point loop.* Let $s=s_n$. The map $B(u,t)=H_t(s(u))$ is a continuous map of the compact square into $Z$: its image never meets $q_j$ for $j<n$, since $H_t$ fixes those points and is injective. Its left edge is the constant $d$, its lower edge is $s$, its right edge is $\gamma$, and its upper edge is $k\circ s$. Its boundary relation is therefore $s\cdot\gamma\cdot(k\circ s)^{-1}\simeq1$ in $Z$. Independently, apply [F1] to the endpoint homeomorphism $k$, whose induced action is the identity. This gives a compact relative-endpoint homotopy $k\circ s\simeq s$ with fixed endpoints $d,q_n$. Filling $q_n$ makes this an ordinary relative path homotopy in $Z$. Substitute it into the boundary relation to obtain $s\cdot\gamma\cdot s^{-1}\simeq1$, hence $[\gamma]=1$ in $\pi_1(Z,q_n)$ by basepoint transport along $s$. This uses the compact endpoint homotopy supplied by [F1], not an extension of an arbitrary homotopy on $X$. [F1, step 3.1, construct]

5.1 *Returning to the interior and closing induction.* The loop $\gamma$ lies in the interior and has compact image. Choose $r_0<1$ so that all its points and all $q_j$ have norm less than $r_0$. Compress the outer collar radially by $r\mapsto r$ for $r\le r_0$ and $r\mapsto r_0+(r-r_0)/2$ for $r\ge r_0$. This continuous map sends $Z$ into $Y_n$, fixes $\gamma$ and $q_n$, and avoids the other marked points because it changes only the outer collar. Composing the nullhomotopy from step 4.1 with it shows $[\gamma]=1$ already in $\pi_1(Y_n,q_n)$. [F3] now gives $[h]=\operatorname{Push}_n(1)=1$. By [F4] this is precisely an isotopy to the identity relative to $\partial D^2\cup Q_n$. The induction is complete. AC is used through the point-pushing kernel theorem and point-motion extensions; no general arc-tameness or arc-isotopy theorem is needed in this proof. [F3, F4, step 3.1, step 4.1, discharge-induction] ∎
