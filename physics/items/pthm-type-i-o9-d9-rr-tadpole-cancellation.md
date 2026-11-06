---
id: pthm-type-i-o9-d9-rr-tadpole-cancellation
kind: physics-theorem
title: "Type I O9-D9 RR Tadpole Cancellation"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 7
domain: physics
library: physics
category: string-theory
physical_scope: "Conditional flat ten-dimensional perturbative RR tadpole cancellation for the standard Type I negative-charge O9-minus projection. The one-loop channel residues are source-normalized inputs; no compactification, alternate orientifold, or general O-plane charge formula is claimed."
deps:
  - def-type-i-omega-orientifold-projection
  - post-type-i-o9-d9-rr-tadpole-amplitude-data
dependency_roles:
  def-type-i-omega-orientifold-projection: formulation-prerequisite
  post-type-i-o9-d9-rr-tadpole-amplitude-data: physical-assumption
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "K. S. Gimon and J. Polchinski, Consistency Conditions for Orientifolds, hep-th/9601038v3"
      url: "https://arxiv.org/pdf/hep-th/9601038v3"
      locator: "§§2–3, PDF pp. 5–10: transverse Klein-bottle, annulus, and Möbius-strip RR residues and Chan–Paton projection."
    - title: "C. Angelantonj and A. Sagnotti, Open Strings, hep-th/0204089v2"
      url: "https://arxiv.org/pdf/hep-th/0204089v2"
      locator: "§3.2, equations (142)–(148): transverse Klein-bottle, annulus, and Möbius RR amplitudes and their massless residue."
    - title: "Joseph Polchinski, Shyamoli Chaudhuri, and Clifford V. Johnson, Notes on D-Branes, hep-th/9602052v2"
      url: "https://arxiv.org/pdf/hep-th/9602052v2"
      locator: "Lecture III §3.2, PDF pp. 22–25, for the source-charge and tadpole consistency interpretation."
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

In the flat ten-dimensional Type I model of [[def-type-i-omega-orientifold-projection]], take the standard O9-minus projection and let $N$ be the nonnegative integer number of space-filling D9-branes. In the source's perturbative RR normalization, cancellation of the massless RR tadpole requires $N=32$; the Chan–Paton gauge algebra is then $\mathfrak{so}(32)$, conventionally denoted $SO(32)$. This conclusion is specific to this projection and normalization.

## Statement references

[[def-type-i-omega-orientifold-projection]]

[Gimon and Polchinski, §§2–3](https://arxiv.org/pdf/hep-th/9601038v3)

[Angelantonj and Sagnotti, §3.2](https://arxiv.org/pdf/hep-th/0204089v2)

## Facts & Assumptions

**Given:** The flat Type I O9-minus/D9 model, with $N\in\mathbb Z_{\geq0}$. RR means Ramond–Ramond. The Klein bottle is the one-loop closed unoriented surface, the annulus is the open-string cylinder with two boundaries, and the Möbius strip is the open one-loop surface with an orientation-reversing identification. Their transverse-channel amplitudes describe closed-string propagation between crosscap and boundary states. Define the massless RR tadpole residue as the coefficient of the common massless RR propagation channel after the three amplitudes are combined. Tadpole cancellation means this coefficient vanishes.

[F1] [[def-type-i-omega-orientifold-projection]]: the standard O9-minus Chan–Paton projection has invariant vector matrices $\lambda=-\lambda^T$, with Lie algebra $\mathfrak{so}(N)$.

[A1] [[post-type-i-o9-d9-rr-tadpole-amplitude-data]]: the common transverse-channel massless RR residues are $r_K=16$, $r_A=N^2/64$, and $r_M=\epsilon N$; O9-minus uses $\epsilon=-1$, and perturbative tadpole cancellation requires their sum to vanish.

## Proof

1.1 Add the three source-normalized residues in [A1]. Since $\epsilon^2=1$,
$$
r_{\mathrm{RR}}=16+\frac{N^2}{64}+\epsilon N =\frac{N^2+64\epsilon N+1024}{64} =\frac{(N+32\epsilon)^2}{64}.
$$
[given, A1, algebra]

2.1 For the negative-charge O9-minus projection, [A1] sets $\epsilon=-1$, so step 1.1 becomes $r_{\mathrm{RR}}=(N-32)^2/64$. [A1, step 1.1, algebra]

3.1 By the stated tadpole-cancellation condition [A1], the residue in step 2.1 is zero. The denominator $64$ is positive, so $(N-32)^2=0$, which implies $N=32$. [given, A1, step 2.1, algebra]

4.1 The Chan–Paton matrices at this value of $N$ are the antisymmetric $32\times32$ matrices by [F1], which form $\mathfrak{so}(32)$. This is the claimed perturbative Chan–Paton gauge algebra. [F1, step 3.1, algebra] ∎

## Remarks

The source residues are physical one-loop inputs; the proof performs their normalization-compatible sum and solves the cancellation condition. It does not derive the worldsheet amplitudes from first principles. The result does not extend to other O-plane signs, compactifications, or general orientifold charge formulas.

The following quotient presentations identify the three one-loop worldsheet topologies used in the source amplitudes. Each panel is a unit square; paired edges with the same letter are identified, and arrow directions give the coordinate map along the edge.

```tikz
\begin{tikzpicture}[scale=1.0, every node/.style={font=\small}]
\begin{scope}[xshift=0cm]
  \draw (0,0) rectangle (1,1);
  \draw[->] (0,0.2) -- (0,0.8);
  \draw[->] (1,0.2) -- (1,0.8);
  \node at (0,0.5) [left] {$a$};
  \node at (1,0.5) [right] {$a$};
  \node at (0.5,-0.35) {Annulus $A$};
\end{scope}
\begin{scope}[xshift=3.1cm]
  \draw (0,0) rectangle (1,1);
  \draw[->] (0,0.2) -- (0,0.8);
  \draw[->] (1,0.8) -- (1,0.2);
  \node at (0,0.5) [left] {$a$};
  \node at (1,0.5) [right] {$a$};
  \node at (0.5,-0.35) {M\"obius $M$};
\end{scope}
\begin{scope}[xshift=6.2cm]
  \draw (0,0) rectangle (1,1);
  \draw[->] (0,0.2) -- (0,0.8);
  \draw[->] (1,0.2) -- (1,0.8);
  \draw[->] (0.2,0) -- (0.8,0);
  \draw[->] (0.8,1) -- (0.2,1);
  \node at (0,0.5) [left] {$a$};
  \node at (1,0.5) [right] {$a$};
  \node at (0.5,0) [below] {$b$};
  \node at (0.5,1) [above] {$b$};
  \node at (0.5,-0.35) {Klein $K$};
\end{scope}
\end{tikzpicture}
```

In the annulus panel the vertical edges are identified by $(0,y)\sim(1,y)$, leaving the horizontal edges as boundary. For the Möbius strip the vertical identification is $(0,y)\sim(1,1-y)$, which joins the two horizontal edges into one boundary component. For the Klein bottle the vertical identification is $(0,y)\sim(1,y)$ and the horizontal identification is $(x,0)\sim(1-x,1)$, so the quotient has no boundary and is nonorientable. The diagram specifies only these surface quotients; the residue derivation above uses the cited amplitude formulas and does not rely on the drawing.
