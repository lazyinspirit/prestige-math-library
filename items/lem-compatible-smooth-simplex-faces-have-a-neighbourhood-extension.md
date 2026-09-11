---
id: "lem-compatible-smooth-simplex-faces-have-a-neighbourhood-extension"
kind: "lemma"
title: "Compatible smooth simplex faces have a neighbourhood extension"
deps: ["def-smooth-singular-simplex", "thm-relative-whitney-approximation-for-manifold-valued-maps", "thm-whitney-approximation-for-manifold-valued-maps", "def-axiom-of-choice", "def-countable-choice", "def-the-standard-smooth-step-function"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "DG-16 design; Hatcher/Park control"
      url: "https://people.math.harvard.edu/~pspark/derham.pdf"
      locator: "Park Lemma 2.1; neighbourhood-extension bridge"
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Assume countable choice $\mathrm{AC}_\omega$. Let $N$ be a smooth manifold without boundary. For every codimension-one face $D_i$ of $D=\Delta^n$, let $g_i:D_i\to N$ be smooth in the affine-neighbourhood sense. Suppose $g_i=g_j$ on $D_i\cap D_j$. Then there are an open neighbourhood $O$ of $\partial D$ in the affine span $E$ of $D$ and a smooth $h:O\to N$ with $h|_{D_i}=g_i$. Only face values are extended, not independently prescribed off-face extensions. No filling of the whole simplex is asserted.

## Facts & Assumptions

**Given:** The compatible face maps and the boundaryless target.

[F1] Smooth simplex maps have smooth extensions on open affine neighbourhoods ([[def-smooth-singular-simplex]]).

[F2] Under countable choice, the explicit auxiliary construction in the Whitney proof gives a smooth embedding $j:N\to\mathbb R^m$, image $S$, smooth inverse $j^{-1}:S\to N$, an open $U\supseteq S$ and smooth retraction $R:U\to S$ fixing $S$ ([[thm-whitney-approximation-for-manifold-valued-maps]], Proof 1.1–6.1).

[F3] The smooth step $s$ is zero on $(-\infty,0]$, one on $[1,\infty)$ and takes values in $[0,1]$ ([[def-the-standard-smooth-step-function]]).

[A1] Countable choice is [[def-countable-choice]], the countable instance of [[def-axiom-of-choice]]; only the former is assumed here.

## Proof

1.1 If $n=0$, take $O=\varnothing$ and the empty map. Otherwise the face maps glue continuously to $g:\partial D\to N$, because the boundary is a finite closed union and the maps agree on all intersections. Fix the data in [F2]. The only infinite-choice use in this proof is the countable embedding construction inherited there. [given, F1, F2, A1]

2.1 At $p\in\partial D$ write $J=\{i:\lambda_i(p)=0\}$ for its incident faces, where $\lambda_i$ are barycentric coordinates. Choose one $k\notin J$ and use the other $n$ coordinates as affine coordinates on $E$. Shrink around $p$ so every nonincident $\lambda_i$ remains positive. For a nonempty $I\subseteq J$, define $P_I$ by setting the coordinates in $I$ to zero and adding their sum to $\lambda_k$. Then $P_IP_L=P_{I\cup L}$, $P_Ip=p$, and $P_I(D)\subseteq D$ by nonnegativity of the retained and added coordinates. [F1, step 1.1, algebra]

3.1 On $E_I=\{\lambda_i=0:i\in I\}$ take a smooth Euclidean extension $a_I$ of $jg$ on its actual face intersection near $p$: restrict an extension of $jg_i$ for one $i\in I$ to $E_I$. The intersections of the finitely many inverse extension domains give an open $V_p$ where every $a_I P_I$ is defined. Set $A_p=\sum_{\varnothing\ne I\subseteq J}(-1)^{|I|+1}a_I P_I$. For $x\in V_p\cap\partial D$, choose $j_0\in J$ with $\lambda_{j_0}(x)=0$. Pair each nonempty $I$ omitting $j_0$ with $I\cup\{j_0\}$. Their projected points coincide and lie in the actual intersection face, by step 2.1, so compatibility gives equal values with opposite signs. Only $I=\{j_0\}$ remains, giving $A_p(x)=jg(x)$. No agreement of the arbitrary extensions outside the actual simplex intersections was assumed. [F1, step 1.1, step 2.1, algebra]

4.1 Consider all local data from steps 2.1–3.1 together with balls $B(p,r)$ whose closed doubled balls lie in $V_p$. They form a cover of compact $\partial D$. Extract finitely many, indexed by $a$, with extensions $A_a$ on neighbourhoods of their closed doubled balls. Define $\eta_a(x)=1-s((\|x-p_a\|^2-r_a^2)/(3r_a^2))$. It equals one on the radius-$r_a$ ball and zero outside the radius-$2r_a$ ball. The product $\eta_a A_a$, extended by zero, is globally smooth: its support is contained in a closed ball strictly inside the domain of $A_a$. This uses a finite subcover of all eligible data, not a simultaneous point-indexed choice. [F3, step 2.1, step 3.1]

5.1 Put $w=\sum_a\eta_a$ and $O_0=\{w>0\}$, an open neighbourhood of the boundary. On $O_0$, $A=(\sum_a\eta_a A_a)/w$ is smooth. At a boundary point every active $A_a$ equals $jg$, hence $A=jg$. Thus $O=O_0\cap A^{-1}(U)$ is open and contains the boundary, and $h=j^{-1}RA:O\to N$ is smooth and restricts to $g$. This proves the asserted neighbourhood extension. [F2, step 3.1, step 4.1, algebra]

6.1 In dimension one the boundary is two points and the same finite construction applies, regardless of their images; a filling is not inferred. Empty target with $n>0$ cannot satisfy the supplied-face hypothesis. Repeated or constant face values create no exception to the cancellation in step 3.1. The $n=0$ endpoint was treated in step 1.1; all other selections were finite. The boundaryless hypothesis is essential: compatibility alone does not guarantee nonnegative smooth extensions for a half-space target. [F1, A1, step 1.1, step 3.1, step 4.1, step 5.1] ∎
