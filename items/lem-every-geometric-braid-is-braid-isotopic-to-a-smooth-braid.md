---
id: lem-every-geometric-braid-is-braid-isotopic-to-a-smooth-braid
kind: lemma
title: "Every geometric braid is braid-isotopic to a smooth braid"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-geometric-braid-with-setwise-endpoints, def-braid-isotopy-relative-top-and-bottom,
       thm-whitney-approximation-for-euclidean-valued-maps, def-countable-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    delegated_by: "owner via frontier-38-owner-30 build dispatch"
    scope: "Historical completed Step 5 full authored item reading and mathematical acceptance; exact historical raw bytes differ from current only by publication status and verification metadata. Direct prerequisite interfaces checked; no recursive audit of supplier proofs."
    evidence:
      - "research/frontier-38-owner-30-reader-17.md"
      - "research/frontier-38-owner-30-alpha-batch-17-5a.md"
      - "research/frontier-38-owner-30-step5-hash-17-post-5a.json"
    content_sha256: "49537bc43877d76f77ae07ce3e6e131e751ab79d67d946337a07794ce18a88f2"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Ozsvath, Stipsicz and Szabo, Grid Homology for Knots and Links, AMS Surveys and Monographs 208 (2015); section 2.1, printed pp. 13-19; Appendix B.1, printed pp. 367-372"
      url: "https://web.math.princeton.edu/~petero/GridHomologyBook.pdf"
    - title: "Birman and Brendle, Braids: A Survey, Handbook of Knot Theory chapter, author manuscript; section 1.2-2, printed pp. 5-13"
      url: "https://www.math.columbia.edu/~jb/Handbook-21.pdf"
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $\beta=(z_1,\dots,z_n)$ be a geometric braid on
$n$ strands based at $Q$. Then for every $\rho>0$ there is a braid
$\beta'=(z'_1,\dots,z'_n)$ all of whose strand maps $z'_j\colon I\to D^\circ$
are smooth, together with a braid isotopy $Z$ from $\beta$ to $\beta'$ such that

$$\lvert Z_j(s,t)-z_j(t)\rvert<\rho\qquad\text{for all }j,\ s,\ t.$$

Moreover the isotopy is *relative to the endpoints* in the precise sense of
[[def-braid-isotopy-relative-top-and-bottom]]: every slice $Z(s,\cdot)$ is a
braid based at $Q$, so every bottom endpoint is the fixed point
$Z_j(s,0)=q_j$, and the top endpoints may be taken individually fixed,
$Z_j(s,1)=z_j(1)$, so that the endpoint permutation is preserved. If the given
braid is already smooth on a neighbourhood of $t=0$ and $t=1$, the construction
below may be centred there and the isotopy may be taken trivial on a
neighbourhood of the endpoints; for an arbitrary continuous braid the endpoint values remain fixed as above,
and neighbourhood agreement cannot be required unless the original strands
are smooth on such a neighbourhood.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a geometric braid $\beta=(z_1,\dots,z_n)$ based at $Q$ ([[def-geometric-braid-with-setwise-endpoints]]), and a real number $\rho>0$.

[F1] $\mathrm{AC}_\omega$ is the countable axiom of choice ([[def-countable-choice]]).

[F2] Assume $\mathrm{AC}_\omega$. Let $F\colon M\to\mathbb R^k$ be continuous on a smooth manifold $M$ and let $\varepsilon\colon M\to(0,\infty)$ be a positive continuous error function. Then there exists a smooth map $\widetilde F\colon M\to\mathbb R^k$ with $\lVert\widetilde F(p)-F(p)\rVert<\varepsilon(p)$ for all $p\in M$ ([[thm-whitney-approximation-for-euclidean-valued-maps]]).

[F3] A geometric braid on $n$ strands based at $Q$ is an $n$-tuple of continuous maps $z_j\colon I\to D^\circ$ with $z_i(t)\ne z_j(t)$ for $i\ne j$, $z_j(0)=q_j$ for every $j$, and $\{z_1(1),\dots,z_n(1)\}=\{q_1,\dots,q_n\}$ ([[def-geometric-braid-with-setwise-endpoints]]).

[F4] A braid isotopy $Z=(Z_1,\dots,Z_n)$ from $\beta$ to $\beta'$ is an $n$-tuple of jointly continuous maps $Z_j\colon I\times I\to D^\circ$ such that every slice $Z(s,\cdot)$ is a braid based at $Q$, and $Z_j(0,t)=z_j(t)$, $Z_j(1,t)=z'_j(t)$ ([[def-braid-isotopy-relative-top-and-bottom]]).

## Proof

**Proof technique:** direct.

1.1 **Empty, singleton and uniform margins.** For $n=0$ choose the empty smooth braid and constant empty isotopy; every assertion is vacuous. Henceforth $n\ge1$. The finite disk-boundary function $t\mapsto\min_j(1-|z_j(t)|)$ is positive and continuous on $I$, so has positive minimum. If $n\ge2$, the finite collision function $t\mapsto\min_{i<j}|z_i(t)-z_j(t)|$ also has positive minimum. Choose $m>0$ at most both minima when $n\ge2$, and at most the boundary minimum alone when $n=1$. Put $\eta=\min\{\rho/4,m/8\}$, so $3\eta<\rho$ and $3\eta<m/2$. No minimum of an empty pair list is used. [F3, given, algebra]

2.1 **Approximate on a boundaryless domain.** Extend the continuous tuple $z:I\to\mathbb R^{2n}$ to $\mathbb R$ by the constant tuple $z(0)$ for $t<0$ and $z(1)$ for $t>1$. This extension is continuous because its values agree at $0,1$. Apply [F2] on the boundaryless smooth manifold $\mathbb R$, with constant error $\eta$, and restrict the resulting smooth map to $I$. It gives $g=(g_1,\ldots,g_n)$ with $|g_j(t)-z_j(t)|<\eta$ for every $j,t$. Thus no boundaryless Whitney assertion is applied directly to $I$. [F1, F2, step 1.1, construct]

3.1 **Exact endpoint collars, including preserved smooth germs.** Choose $\delta\in(0,1/2)$ so $|z_j(t)-q_j|<\eta$ on $[0,\delta]$ and $|z_j(t)-z_j(1)|<\eta$ on $[1-\delta,1]$ for all $j$. Take smooth cutoffs $\chi_0,\chi_1$ supported in these disjoint collars and equal to one on the half-sized endpoint collars. Ordinarily use the constant collar data $a_{j0}(t)=q_j$, $a_{j1}(t)=z_j(1)$. If the original strands are smooth in an endpoint neighbourhood, shrink the corresponding collar into that neighbourhood and instead use $a_{j0}(t)=z_j(t)$ or $a_{j1}(t)=z_j(t)$ there. The products with their cutoffs extend smoothly by zero off the collars. Define $h_j=(1-\chi_0-\chi_1)g_j+\chi_0 a_{j0}+\chi_1 a_{j1}$. This is smooth with $h_j(0)=q_j$, $h_j(1)=z_j(1)$. In the already-smooth case it agrees with $z_j$ throughout the smaller original endpoint neighbourhood, rather than replacing that neighbourhood by a constant. [F3, step 2.1, construct]

4.1 **All collar choices satisfy the same error bound.** On either collar, the replacement error $|a_{j\ell}-z_j|$ is less than $\eta$ for constant data and zero for preserved original data. Since the cutoffs have disjoint supports and weights sum to one, $|h_j-z_j|\le(1-\chi_0-\chi_1)|g_j-z_j|+\chi_0|a_{j0}-z_j|+\chi_1|a_{j1}-z_j|<3\eta\le3m/8<m/2$. This covers both arbitrary continuous endpoints and already-smooth endpoint neighbourhoods. [step 1.1, step 2.1, step 3.1, algebra]

5.1 **The repaired motion is a braid, with the same endpoints.** For all $i\ne j$ and all $t$, $\lvert h_i(t)-h_j(t)\rvert\ge\lvert z_i(t)-z_j(t)\rvert-\lvert h_i(t)-z_i(t)\rvert-\lvert h_j(t)-z_j(t)\rvert>m-\tfrac{3m}{8}-\tfrac{3m}{8}=\tfrac m4>0,$ so the values $h_1(t),\dots,h_n(t)$ are pairwise distinct; and $\lvert h_j(t)\rvert\le\lvert z_j(t)\rvert+\tfrac{3m}{8}<1$, so they lie in $D^\circ$. Together with $h_j(0)=q_j$ and $\{h_j(1)\}=\{z_j(1)\}=\{q_j\}$ from [F3] and step 3.1, this shows that $h$ is a braid based at $Q$, smooth by step 3.1, whose endpoint permutation equals that of $\beta$ because $h_j(1)=z_j(1)$ for every $j$. [F3, step 1.1, step 3.1, step 4.1, algebra]

6.1 **The straight-line isotopy.** Define $Z_j(s,t):=(1-s)z_j(t)+s\,h_j(t)$ for $(s,t)\in I\times I$. It is jointly continuous, $Z(0,\cdot)=\beta$ and $Z(1,\cdot)=h$, and every slice is a braid based at $Q$: for all $s,t,i\ne j$, $\lvert Z_j(s,t)-z_j(t)\rvert=s\lvert h_j(t)-z_j(t)\rvert<\tfrac{3m}{8},\qquad \lvert Z_j(s,t)\rvert\le\lvert z_j(t)\rvert+\tfrac{3m}{8}<1,$ so the $n$ values are pairwise distinct (their pairwise distances are at least $m-\tfrac{3m}{8}-\tfrac{3m}{8}=\tfrac m4>0$) and lie in $D^\circ$; moreover $Z_j(s,0)=(1-s)q_j+sq_j=q_j$ and $Z_j(s,1)=(1-s)z_j(1)+s\,z_j(1)=z_j(1)$ for every $s$. Hence $Z$ is a braid isotopy from $\beta$ to the smooth braid $h$. [F4, step 3.1, step 5.1, algebra]

7.1 **Conclusion.** By step 6.1 the smooth braid $h$ is braid-isotopic to $\beta$ through the isotopy $Z$, whose deviation from $\beta$ satisfies $\lvert Z_j(s,t)-z_j(t)\rvert=s\lvert h_j(t)-z_j(t)\rvert<3\eta<\rho\qquad\text{for all }j,s,t,$ by the choice of $\eta$ in step 1.1. The isotopy keeps every bottom endpoint fixed pointwise and every individual top endpoint fixed, so the endpoint permutation is preserved by step 5.1. Where a smooth original collar was retained in step 3.1, $h=z$ there, so the entire straight-line isotopy is also fixed there. Taking $\beta':=h$ proves the statement for the prescribed $\rho$, and $\rho>0$ was arbitrary. [F4, step 1.1, step 3.1, step 6.1, algebra] ∎
