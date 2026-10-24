---
id: lem-centered-chord-and-unequal-step-tangent-error
kind: lemma
title: "Second-order centered and unequal-step tangent estimates"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-regular-minimum-energy-path-in-a-collision-free-tube
  - def-ck-and-multi-index-notation-in-several-variables
  - thm-multivariable-taylor-formula-with-lagrange-remainder
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Weinan E, Weiqing Ren, and Eric Vanden-Eijnden, String method for the study of rare events"
      url: "https://www.math.pku.edu.cn/teachers/litj/notes/stoch_topics2017/lect02/string.pdf"
      locator: "§II, equations (2)–(6): intrinsic tangent and projected force; the centered truncation bound is proved here"
    - title: "Weinan E, Weiqing Ren, and Eric Vanden-Eijnden, Simplified and improved string method for computing the minimum energy paths in barrier-crossing events"
      url: "https://math.pku.edu.cn/teachers/litj/notes/stoch_topics2017/lect02/SimplifiedString.pdf"
      locator: "§IV B–C: interpolation and reparameterization accuracy discussion; no tangent bound is imported"
---

## Statement

Let $R:J\to\mathbb R^d$ be a unit-speed $C^3$ curve on an open interval $J$ containing $[0,1]$. Let $J_0\subseteq J$ be an interval on which $\max_j\sup_{u\in J_0}|R_j'''(u)|\le M_3/\sqrt d$. For the centered estimate, take $s$ and $h>0$ with $[s-h,s+h]\subseteq J_0$ and define

$$d_h:=\frac{R(s+h)-R(s-h)}{2h},\qquad \widehat t_h:=\frac{d_h}{\|d_h\|_2}.$$

If $\delta_h:=M_3h^2/6\le1/2$, then $d_h\ne0$ and

$$\|d_h-R'(s)\|_2\le\delta_h,\qquad \|\widehat t_h-R'(s)\|_2\le4\delta_h.$$

For the unequal-step estimate, take positive $h_-,h_+$ with $[s-h_-,s+h_+]\subseteq J_0$ and define

$$d_{h_-,h_+}:=\frac{h_+}{h_-(h_-+h_+)}(R(s)-R(s-h_-))+\frac{h_-}{h_+(h_-+h_+)}(R(s+h_+)-R(s)).$$

If $\delta_{h_-,h_+}:=M_3h_-h_+/6\le1/2$, then it is nonzero and its unit normalization differs from $R'(s)$ by at most $4\delta_{h_-,h_+}$. In particular, equal steps give an $O(h^2)$ unit-tangent error; quasiuniform unequal steps give an $O(h_-h_+)$ error. No second-order claim is made for a one-sided tangent branch.

## Facts & Assumptions

**Given:** The unit-speed $C^3$ curve, stencil bounds and steps in the Statement.

[F1] [[def-regular-minimum-energy-path-in-a-collision-free-tube]] defines the unit tangent of a regular path as $R'(s)/\|R'(s)\|_2$. For the present curve, the separate unit-speed hypothesis means $\|R'(s)\|_2=1$ on all of $J$, so its unit tangent there is $R'(s)$.

[F2] [[thm-multivariable-taylor-formula-with-lagrange-remainder]]: applied coordinatewise to a $C^3$ curve, the degree-two Taylor remainder at displacement $u$ is bounded in Euclidean norm by $M_3|u|^3/6$ under the stated coordinate bound.

[A1] The interval $J_0$ lies in the domain of the $C^3$ curve and every coordinate third derivative satisfies $|R_j'''(u)|\le M_3/\sqrt d$ for $u\in J_0$; the $C^3$ convention is [[def-ck-and-multi-index-notation-in-several-variables]].



**Given:** The hypotheses of the Statement.

## Proof

1.1 Taylor's formula [F2] at $s+h$ and $s-h$ gives $R(s\pm h)=R(s)\pm hR'(s)+\frac{h^2}{2}R''(s)+r_\pm$ with $\|r_\pm\|_2\le M_3h^3/6$ by [A1]. Subtracting cancels the second-derivative terms, so $d_h=R'(s)+(r_+-r_-)/(2h)$ and $\|d_h-R'(s)\|_2\le M_3h^2/6=\delta_h$. [A1, F2, given, algebra]

1.2 For unequal steps, write $R(s)-R(s-h_-)=h_-R'-\frac{h_-^2}{2}R''+r_-$ and $R(s+h_+)-R(s)=h_+R'+\frac{h_+^2}{2}R''+r_+$ with $\|r_\pm\|_2\le M_3h_\pm^3/6$ by [A1, F2]. Substitution into $d_{h_-,h_+}$ gives coefficient $1$ on $R'(s)$ and $0$ on $R''(s)$; the two remainder coefficients yield $\|d_{h_-,h_+}-R'(s)\|_2\le M_3h_-h_+/6=\delta_{h_-,h_+}$. [A1, F2, given, algebra]

2.1 Since $\|R'(s)\|_2=1$, step 1.1 gives $\|d_h\|_2\ge1-\delta_h\ge1/2$, so $d_h\ne0$. Moreover, $|\|d_h\|_2-1|\le\delta_h$, and therefore $\|d_h/\|d_h\|_2-R'(s)\|_2\le\|d_h-R'(s)\|_2/\|d_h\|_2+|1-\|d_h\|_2|/\|d_h\|_2\le4\delta_h$. [F1, step 1.1, algebra]

3.1 The same normalization argument as in step 2.1, using $\delta_{h_-,h_+}\le1/2$, gives nonzero $d_{h_-,h_+}$ and normalized error at most $4\delta_{h_-,h_+}$. Setting $h_-=h_+=h$ recovers the centered formula, and if both steps are bounded by a fixed multiple of their maximum mesh size, their product is $O(h^2)$. [F1, step 2.1, step 1.2, algebra] ∎


## Remarks

The schematic below shows samples on a planar unit-speed circular arc (not to scale in the parameter). In the centered panel, the arrow from $R(s-h)$ to $R(s+h)$ has direction $d_h$. In the unequal panel, the two arrows represent the increments used in the divided secants $v_-=(R(s)-R(s-h_-))/h_-$ and $v_+=(R(s+h_+)-R(s))/h_+$. The estimator is their weighted average $d_{h_-,h_+}=\frac{h_+}{h_-+h_+}v_-+\frac{h_-}{h_-+h_+}v_+$, rather than the direction of the chord joining the outer samples. Dashed arrows indicate $R'(s)$. This illustration makes no additional error claim; the bounds and nonvanishing conditions are proved above.

```tikz
\begin{tikzpicture}[scale=1.05, every node/.style={font=\small}]
\begin{scope}
\node at (0,2.1) {Centered samples};
\draw[thick] (-1.73205,1) arc (210:330:2);
\coordinate (A) at (-1.435,0.607);
\coordinate (B) at (0,0);
\coordinate (C) at (1.435,0.607);
\draw[->,thick] (A) -- (C) node[midway,above] {$d_h$ direction};
\draw[->,dashed,thick] (B) -- (1.35,0) node[right] {$R'(s)$};
\fill (A) circle (2pt) node[above left] {$R(s-h)$};
\fill (B) circle (2pt) node[below] {$R(s)$};
\fill (C) circle (2pt) node[above right] {$R(s+h)$};
\end{scope}
\begin{scope}[xshift=6.4cm]
\node at (0,2.1) {Unequal samples};
\draw[thick] (-1.73205,1) arc (210:330:2);
\coordinate (D) at (-0.959,0.245);
\coordinate (E) at (0,0);
\coordinate (F) at (1.683,0.919);
\draw[->,thick] (D) -- (E);
\draw[->,thick] (E) -- (F);
\draw[->,dashed,thick] (E) -- (1.35,0) node[right] {$R'(s)$};
\fill (D) circle (2pt) node[above left] {$R(s-h_-)$};
\fill (E) circle (2pt) node[below] {$R(s)$};
\fill (F) circle (2pt) node[above right] {$R(s+h_+)$};
\end{scope}
\end{tikzpicture}
```
