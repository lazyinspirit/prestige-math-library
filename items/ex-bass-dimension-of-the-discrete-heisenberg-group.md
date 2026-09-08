---
id: ex-bass-dimension-of-the-discrete-heisenberg-group
kind: example
title: The discrete Heisenberg group has growth degree four
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Druţu–Kapovich, Lectures on Geometric Group Theory (585-page draft)
      url: https://www.math.ucdavis.edu/~kapovich/EPR/kapovich_drutu.pdf
      locator: Exercise 10.30, p.282; Example 5.3.7 in Löh
    - title: "Clara Löh, Geometric Group Theory, SS 2022"
      url: https://loeh.app.uni-regensburg.de/teaching/ggt_ss22/lecture_notes.pdf
      locator: "Theorem 5.3.6 and Example 5.3.7, printed p.140; general proof omitted"
status: draft
origin: pipeline
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
proof_strategy: direct
deps: ["thm-bass-guivarch-growth-degree-formula-with-proof", "def-bass-guivarch-dimension"]
---
## Example

Let $H=\operatorname{UT}_3(\mathbb Z)$, writing $(a,b,c)$ for the matrix with entries a at (1,2), b at (2,3), and c at (1,3). Then $\gamma_2(H)=\{(0,0,c):c\in\mathbb Z\}$, $\gamma_3(H)=1$, $Z(H)=\gamma_2(H)$, $r_1=2$, $r_2=1$, and $D(H)=4$. Its word balls for any finite generating set have degree four.

The explicit laws are $(a,b,c)(a^{\prime},b^{\prime},c^{\prime})=(a+a^{\prime},b+b^{\prime},c+c^{\prime}+ab^{\prime})$ and $[(a,b,c),(a^{\prime},b^{\prime},c^{\prime})]=(0,0,ab^{\prime}-a^{\prime}b)$. With $x=(1,0,0)$, $y=(0,1,0)$, $z=(0,0,1)$, one has $[x,y]=z$ and the unique ordered form $x^a y^b z^k=(a,b,ab+k)$.

## Facts & Assumptions

**Given:** Use matrix multiplication and the commutator convention $[u,v]=uvu^{-1}v^{-1}$.

[F1] A finitely generated nilpotent group has ball growth degree D ([[thm-bass-guivarch-growth-degree-formula-with-proof]]).

[F2] D is the weighted sum of lower-central ranks ([[def-bass-guivarch-dimension]]).

## Verification

1.1 Matrix multiplication gives $(a,b,c)(a^{\prime},b^{\prime},c^{\prime})=(a+a^{\prime},b+b^{\prime},c+c^{\prime}+ab^{\prime})$. The identity is (0,0,0), and substitution on both sides gives $(a,b,c)^{-1}=(-a,-b,-c+ab)$. Put $x=(1,0,0)$, $y=(0,1,0)$, $z=(0,0,1)$. Their integer powers satisfy $x^a y^b z^k=(a,b,ab+k)$, so every matrix is uniquely $x^a y^b z^{c-ab}$. [given, algebra]

2.1 Using the product and inverse formulas gives $[(a,b,c),(a^{\prime},b^{\prime},c^{\prime})]=(0,0,ab^{\prime}-a^{\prime}b)$. In particular $[x,y]=z$. Every commutator is a power of z and z itself is a commutator, so $[H,H]=\langle z\rangle$. Elements (0,0,c) commute with every triple by the product rule, hence $\gamma_3=1$. Conversely, if $(a,b,c)$ commutes with $x$ and $y$, its commutators have central entries $-b$ and $a$, so $a=b=0$. Thus the center is exactly $\langle z\rangle$. Since z has infinite order, H has class exactly two. The elements x,y generate because z=[x,y] and step 1.1 gives every matrix. [step 1.1, algebra]

3.1 The homomorphism $(a,b,c)\mapsto(a,b)$ is onto $\mathbb Z^2$ with kernel $\langle z\rangle$, while $c\mapsto(0,0,c)$ identifies the kernel with $\mathbb Z$. Thus $r_1=2$ and $r_2=1$, giving $D=1\cdot2+2\cdot1=4$. F1 applies because x,y are finite generators and H has class two. The identity has a=b=k=0; the matrix entry c equals ab+k and is not generally the normal coordinate k. [F1, F2, step 1.1, step 2.1] ∎

## Source notes

[Druţu–Kapovich, Lectures on Geometric Group Theory (585-page draft)](https://www.math.ucdavis.edu/~kapovich/EPR/kapovich_drutu.pdf), Exercise 10.30, p.282; Example 5.3.7 in Löh. Draft Exercise 10.30 and Löh Example 5.3.7 support the example; the matrix law, normal form and both lower-central inclusions are calculated here.

[Clara Löh, Geometric Group Theory, SS 2022](https://loeh.app.uni-regensburg.de/teaching/ggt_ss22/lecture_notes.pdf), Theorem 5.3.6 and Example 5.3.7, printed p.140; general proof omitted. This independently supports the statement, not the omitted general proof.
