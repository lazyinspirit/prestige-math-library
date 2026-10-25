---
id: ex-the-braid-group-on-three-strands
kind: example
title: "The braid group on three strands and its quotient to $S_3$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-braid-group-by-the-artin-presentation, thm-the-braid-group-surjects-onto-the-symmetric-group]
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "Michael Muger, Tensor Categories: A Selective Guided Tour, Section 4"
      url: "https://arxiv.org/pdf/0804.3587"
---

## Example

The three-strand braid group has presentation

$$B_3=\langle \sigma_1,\sigma_2\mid \sigma_1\sigma_2\sigma_1=\sigma_2\sigma_1\sigma_2\rangle,$$

and the quotient map to $S_3$ sends $\sigma_1$ to $(1\,2)$ and $\sigma_2$ to
$(2\,3)$.

## Facts & Assumptions

**Given:** The Artin presentation of braid groups and the standard quotient to the symmetric group.

[L1] The Artin presentation defines $B_n$ ([[def-braid-group-by-the-artin-presentation]]).

[L2] The map $\sigma_i\mapsto(i\ i+1)$ extends to a surjection $B_n\to S_n$ ([[thm-the-braid-group-surjects-onto-the-symmetric-group]]).

## Verification

**Proof technique:** direct.

1.1 Specializing [L1] to $n=3$ leaves two generators and only one braid relation, because there is no pair $i,j$ with $|i-j|>1$ among $\{1,2\}$. This gives the displayed presentation of $B_3$. [L1, given, algebra]

2.1 Specializing [L2] to $n=3$ gives the quotient map $B_3\to S_3$ with $\sigma_1\mapsto(1\,2)$ and $\sigma_2\mapsto(2\,3)$. [L2, step 1.1] ∎

## Remarks

The following illustration reads strands from bottom to top, with positions
numbered $1,2,3$ from left to right at each boundary, as in the one-based model
of [L2]. A product is stacked with its rightmost factor at the bottom, matching
the convention that the rightmost permutation acts first. Here $\sigma_i$ is
drawn with the strand from lower position $i$ passing over the strand from
lower position $i+1$; reversing that over/under choice depicts $\sigma_i^{-1}$.

```tikz
\begin{tikzpicture}[x=1cm,y=0.9cm,line width=0.9pt]
\foreach \shift/\word in {0/{\sigma_1\sigma_2\sigma_1},4.7/{\sigma_2\sigma_1\sigma_2}} {
  \begin{scope}[xshift=\shift cm]
    \foreach \x in {1,2,3} {
      \node[below] at (\x,0) {$\x$};
      \node[above] at (\x,3) {$\x$};
    }
    \node at (2,3.8) {$\word$};
  \end{scope}
}
\foreach \shift/\a/\b/\c in {0/1/2/1,4.7/2/1/2} {
  \begin{scope}[xshift=\shift cm]
    \foreach \y/\i in {0/\a,1/\b,2/\c} {
      \pgfmathtruncatemacro{\j}{\i+1}
      \foreach \x in {1,2,3} {
        \ifnum\x=\i\else\ifnum\x=\j\else
          \draw (\x,\y)--(\x,\y+1);
        \fi\fi
      }
      \draw (\j,\y)--(\i,\y+1);
      \draw[preaction={draw=white,line width=4pt}] (\i,\y)--(\j,\y+1);
      \node[left] at (0.8,\y+0.5) {$\sigma_{\i}$};
    }
  \end{scope}
}
\node at (4.35,1.5) {$=$};
\end{tikzpicture}
```

The two drawings illustrate the braid relation by the third Reidemeister move.
Forgetting over/under data, each sends bottom positions $1,2,3$ to top positions
$3,2,1$, respectively. Thus both have image $(1\,3)$, since
$(1\,2)(2\,3)(1\,2)=(2\,3)(1\,2)(2\,3)=(1\,3)$.
The verification above uses only the presentation and quotient theorem and is
independent of the illustration.
