---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/ex-binary-additive-strong-interference-capacity.json
  precheck: pass
id: ex-binary-additive-strong-interference-capacity
kind: example
title: The binary additive interference channel in the strong regime
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 9
deps: [def-finite-two-user-interference-channel-and-strong-regime, thm-finite-strong-interference-channel-capacity]
aliases: []
proof_strategy: direct
axiom_use: No choice axiom is used; all alphabets are finite.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Abbas El Gamal and Young-Han Kim, Lecture Notes on Network Information Theory, arXiv:1001.3404v4
      url: https://arxiv.org/pdf/1001.3404v4
      locator: Chapter 6, binary additive interference channel example following the strong-interference theorem, printed pp. 117–119.
---

## Example

Let $\mathcal X_1=\mathcal X_2=\mathcal Y_1=\mathcal Y_2=\{0,1\}$ and set
$$Y_1=X_1\oplus X_2,\qquad Y_2=X_1\oplus X_2,$$
where $\oplus$ is addition modulo two. The capacity region is
$$R_1\ge0,\quad R_2\ge0,\quad R_1\le1,\quad R_2\le1,\quad R_1+R_2\le1$$
bits per use.

## Facts & Assumptions

**Given:** All information quantities in this example are measured in bits: $I_2=I/\ln2$ and $H_2=H/\ln2$ for the nats-valued supplier conventions. Independent messages sent over the binary channel in the example.

[F1] [[def-finite-two-user-interference-channel-and-strong-regime]]: strong interference requires the two conditional mutual-information inequalities for every product input law.

[F2] [[thm-finite-strong-interference-channel-capacity]]: under those universal inequalities, capacity is the intersection of the two multiple-access regions with time sharing.

## Proof



1.1 For every product input law, conditioning on $X_2$ makes both $Y_1$ and $Y_2$ equal to $X_1$ plus the same fixed bit; hence $I_2(X_1;Y_1|X_2)=I_2(X_1;Y_2|X_2)$. Conditioning on $X_1$ gives $I_2(X_2;Y_2|X_1)=I_2(X_2;Y_1|X_1)$. Thus [F1] holds with equality. [F1, given, algebra]

1.2 Each receiver's output is one bit, so its multiple-access sum mutual information is at most $H_2(Y_i)\le1$. Also, given the other input, each user sees a noiseless binary channel, whose mutual information is at most one bit. Therefore the region in [F2] is contained in the stated triangle. [F2, given, algebra]

2.1 With independent uniform inputs, $Y_i$ is uniform, and $I_2(X_1;Y_1|X_2)=I_2(X_2;Y_2|X_1)=I_2(X_1,X_2;Y_i)=1$. The MAC intersection contains the two corner points $(1,0)$ and $(0,1)$; the zero pair is achieved by singleton messages. Time sharing among these three points achieves every nonnegative pair with sum at most one. Together with step 1.2 this proves the capacity region. [F1, F2, step 1.2, algebra] ∎

## Remarks

The shaded triangle is the capacity region in bits per use. Its vertices are the three time-sharing points used in step 2.1; the sloping boundary is $R_1+R_2=1$.

```tikz
\begin{tikzpicture}[scale=3]
\fill[blue!15] (0,0) -- (1,0) -- (0,1) -- (0,0);
\draw[->] (0,0) -- (1.35,0) node[right] {$R_1$};
\draw[->] (0,0) -- (0,1.3) node[above] {$R_2$};
\draw[thick] (0,0) -- (1,0) -- (0,1) -- (0,0);
\fill (0,0) circle (0.5pt) node[below left] {$(0,0)$};
\fill (1,0) circle (0.5pt) node[below] {$(1,0)$};
\fill (0,1) circle (0.5pt) node[left] {$(0,1)$};
\node[above right] at (0.55,0.45) {$R_1+R_2=1$};
\end{tikzpicture}
```
