---
id: lem-trivial-action-on-standard-meridians-fixes-the-stem-arc-system-up-to-isotopy
kind: lemma
title: "Trivial action on the standard meridians fixes the punctures and the stem arcs up to homotopy"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
dependency_level: 3
deps: [def-standard-meridians-of-a-punctured-disk, thm-the-punctured-disk-fundamental-group-is-free-on-standard-meridians, thm-reduced-words-form-the-free-group, def-free-group, def-based-loops-and-fundamental-group]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    delegated_by: "owner via frontier-38-owner-30 build dispatch"
    scope: "Historical completed Step 5 full authored item reading and mathematical acceptance; exact historical raw bytes differ from current only by publication status and verification metadata. Direct prerequisite interfaces checked; no recursive audit of supplier proofs."
    evidence:
      - "research/frontier-38-owner-30-reader-15.md"
      - "research/frontier-38-owner-30-alpha-batch-15-5a.md"
      - "research/frontier-38-owner-30-step5-hash-15-post-5a.json"
    content_sha256: "52fd7e7bed9aa3d0b1a47c468c4bd43c55c745497e79d0b7598bb67f775e166a"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Benson Farb and Dan Margalit, A Primer on Mapping Class Groups, version 5.0 author draft, section 2.3 (Alexander method) and section 9.1.3, printed pp. 61-62 and 256"
      url: "https://web.archive.org/web/20111027114600id_/http://www.math.uchicago.edu/~margalit/mcg/mcgv50.pdf"
    - title: "Juan Gonzalez-Meneses, Basic results on braid groups, section 1.6, printed pp. 8-10"
      url: "https://arxiv.org/pdf/1010.0321"
---

## Statement

Let $h\in\operatorname{Homeo}^+(D^2,\partial D^2)$ preserve $Q_n$ setwise
and induce the identity on $\pi_1(D^2\setminus Q_n,d)$. Then $h(q_i)=q_i$
for every $i$, and $h(s_i)$ is homotopic to $s_i$
relative to endpoints. Relative homotopy uses continuous maps of the compact
parameter square into the filled disk, with fixed endpoints $d,q_i$ and
all other arc points avoiding $Q_n$. No choice principle is used.

## Facts & Assumptions

**Given:** $X=D^2\setminus Q_n$, the stems and meridians of [[def-standard-meridians-of-a-punctured-disk]], and the stated $h$.

[F1] The meridians form a free basis of $\pi_1(X,d)$ ([[thm-the-punctured-disk-fundamental-group-is-free-on-standard-meridians]], [[def-free-group]], [[thm-reduced-words-form-the-free-group]]).

[F2] Equality of two based loop classes means a continuous path homotopy relative to the basepoint ([[def-based-loops-and-fundamental-group]]).

## Proof

1.1 *Fixing the punctures.* Let $h(q_i)=q_{\sigma(i)}$. A positive small circle about $q_i$ is carried to a positive Jordan circle about $q_{\sigma(i)}$ containing no other marked point. Its lasso represents a conjugate of $x_{\sigma(i)}$: contract the circle inside its once-punctured neighborhood to a small circle and compare its tether with the standard tether. Abelianization in the free basis sends this conjugate to $e_{\sigma(i)}$, whereas the hypothesis $h_*x_i=x_i$ sends it to $e_i$. Hence $\sigma(i)=i$ for each $i$. [given, F1]

1.2 *Compactifying the tether calculation correctly.* Fix $i$ and abbreviate $q=q_i$, $s=s_i$, $a=h\circ s$. Take a small round disk $B$ about $q$ avoiding every other marked point. Continuity of $a$ at its endpoint gives a terminal segment contained in $B$. In $B\setminus\{q\}$ write that terminal segment as $(r(u),\theta(u))$ using a continuous lift of its polar angle on the parameter interval. Replace it, relative to its initial point and $q$, by the radial segment: interpolate its angle to the initial angle and its positive radius to the linear radius of that segment. For parameters below $1$ all radii remain positive; at $1$ the radii tend uniformly to zero during the interpolation, since both original and linear radii do so. Thus this is a homotopy on the compact square, avoiding $q$ except at the endpoint, even when $\theta(u)$ is unbounded. Adjust the terminal angle and a connecting path along a circle to obtain a representative consisting of a path $P:d\to p$ followed by the fixed radial tail $p\to q$ of $s$, for a point $p$ on a sufficiently small circle $C\subset B$. Denote the truncated standard stem $d\to p$ by $S$. The connecting-circle adjustment has the same compact homotopy description. [given, construct]

2.1 *Equality of meridians controls the tether.* The lasso associated with $a$ represents $h_*x_i=x_i$. In the terminal modification of step 1.2 the small circles are positive generators of $\pi_1(B\setminus\{q\})$; changing the terminal tether conjugates that generator within this cyclic group and leaves it unchanged. Consequently $[P C P^{-1}]=[S C S^{-1}]=x_i$. Put $w=[P S^{-1}]\in\pi_1(X,d)$. Then $w x_i w^{-1}=x_i$. In the free basis this forces $w=x_i^m$ for an integer $m$: in a reduced word write $w=x_i^a v x_i^b$, where $v$ is empty or its first and last letters are neither $x_i$ nor $x_i^{-1}$. If $v$ is nonempty, the subword $v x_i v^{-1}$ is reduced and retains a letter other than $x_i^{\pm1}$, even after adjoining the outer powers. It therefore cannot reduce to $x_i$. Hence $v$ is empty and $w$ is a power of $x_i$. [F1, step 1.2, algebra]

3.1 *A peripheral power disappears at a marked endpoint.* By [F2], $w=x_i^m$ implies a homotopy of paths with fixed endpoints in $X$ from $P$ to $S C^m$ (append $S$, then cancel the backtracking path). Attach the same radial tail $p\to q$ to this homotopy; its compact image in $X$ stays away from the finite set $Q_n$, and its unchanged tail supplies a continuous extension at $q$, uniformly in the homotopy parameter. Finally $C^m$ followed by that tail is homotopic to the tail inside $B$, with $p,q$ fixed: lift its polar angle along its parameter, interpolate it to the constant angle, and interpolate the radius to the positive linear radius ending at zero. The resulting paths avoid $q$ in their interiors; uniform convergence of their radii to zero again proves continuity on the compact square. Thus $a\simeq s$ in the relative-endpoint sense asserted. This concerns a peripheral power at the endpoint, and does not contract a nontrivial meridian loop inside $X$. [F2, step 1.2, step 2.1, construct]

4.1 *Conclusion.* Step 1.1 proves that every puncture is fixed, and step 3.1 supplies the asserted compact relative-endpoint homotopy for each stem. The radii, paths and homotopies involve finitely many given arcs and explicit polar interpolations; no infinite selection or choice axiom is used. The intermediate paths need not be embeddings; upgrading this homotopy to an isotopy is a separate proper-arc result. [step 1.1, step 3.1] ∎

## Remarks

A based homotopy of maps $X\to X$ need not extend to puncture ends. The proof instead constructs the endpoint homotopy directly, and checks uniform convergence in the radial coordinate. It never evaluates a map or homotopy on a point outside its domain.
