---
id: thm-continuous-monotone-functions-are-differentiable-almost-everywhere-via-rising-sun
kind: theorem
title: "A continuous monotone function is differentiable almost everywhere by the rising-sun route"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-countable-choice, def-four-dini-derivatives-at-a-point, def-lebesgue-measure-and-the-lebesgue-sigma-algebra, thm-countable-union-of-null-is-null, thm-dini-derivatives-exist-are-ordered-and-detect-differentiability, thm-lebesgue-density-theorem, thm-lebesgue-null-agrees-with-elementary-measure-zero-on-the-line, thm-one-sided-hardy-littlewood-inequality-for-continuous-monotone-functions]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Terence Tao, An Introduction to Measure Theory, Lemma 1.6.28"
      url: "https://terrytao.files.wordpress.com/2012/12/gsm-126-tao5-measure-book.pdf"
    - title: "Frigyes Riesz, Sur l’existence de la dérivée des fonctions monotones et sur quelques problèmes qui s’y rattachent, Section 3"
      url: "https://real.mtak.hu/214055/1/math_005_208-221.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]).

Let $F : [a,b] \to \mathbb{R}$ be continuous and monotone. Then $F$ is
differentiable at Lebesgue-almost every point of $(a,b)$.

## Facts & Assumptions

**Given:** Countable choice and a continuous monotone function $F : [a,b] \to \mathbb{R}$.

[A1] The symbols are those of the statement.

## Proof

**Proof technique:** direct.

1.1 Replacing $F$ by $-F$ if necessary, we may assume that $F$ is nondecreasing. For each integer $N \ge 1$, the first inequality of [[thm-one-sided-hardy-littlewood-inequality-for-continuous-monotone-functions]] with $u=a$, $v=b$, and $R=N$ shows that the sets $\{x \in [a,b) : D^{+}F(x) > N\}$ and, after reflecting the interval, $\{x \in (a,b] : D^{-}F(x) > N\}$ have measure at most $(F(b)-F(a))/N$. Hence $D^{+}F$ and $D^{-}F$ are finite almost everywhere. [given]

2.1 Fix rationals $0 < r < R$ and put $$E_{r,R} := \{x \in (a,b) : D^{+}F(x) > R \text{ and } D_{-}F(x) < r\}.$$ For each rational $h>0$, the maps $$x \mapsto \frac{F(x+h)-F(x)}{h} \quad \text{on } (a,b-h), \qquad x \mapsto \frac{F(x)-F(x-h)}{h} \quad \text{on } (a+h,b)$$ are continuous because $F$ is continuous. Therefore $$\{D^{+}F>R\}=\bigcap_{m \ge 1}\bigcup_{\substack{h \in \mathbb{Q}\\0<h<1/m}}\left\{x \in (a,b-h) : \frac{F(x+h)-F(x)}{h}>R\right\},$$ and similarly $$\{D_{-}F<r\}=\bigcap_{m \ge 1}\bigcup_{\substack{h \in \mathbb{Q}\\0<h<1/m}}\left\{x \in (a+h,b) : \frac{F(x)-F(x-h)}{h}<r\right\}.$$ Hence both sets are Borel, so $E_{r,R}$ is Lebesgue measurable. For any subinterval $[u,v] \subseteq [a,b]$, the two inequalities of [[thm-one-sided-hardy-littlewood-inequality-for-continuous-monotone-functions]] give $R\,\lambda(E_{r,R} \cap [u,v]) \le F(v)-F(u)$ and $(R-r)\,\lambda(E_{r,R} \cap [u,v]) \le R(v-u)-F(v)+F(u)$. Adding them yields $(2R-r)\,\lambda(E_{r,R} \cap [u,v]) \le R(v-u)$, so $$\lambda(E_{r,R} \cap [u,v]) \le \frac{R}{2R-r}(v-u).$$ The constant $\frac{R}{2R-r}$ is strictly less than $1$. Therefore no point of $E_{r,R}$ can be a density-one point of $E_{r,R}$. By the Lebesgue density theorem [[thm-lebesgue-density-theorem]], $E_{r,R}$ is null. [step 1.1, algebra]

3.1 Applying step 2.1 to the reflected function $x \mapsto F(a+b-x)$ shows that for every rational $0 < r < R$ the set $E'_{r,R} := \{x \in (a,b) : D^{-}F(x) > R \text{ and } D_{+}F(x) < r\}$ is null as well. Taking the countable union over rational pairs and using [[thm-countable-union-of-null-is-null]], we conclude that outside a null set one has $D^{+}F \le D_{-}F$ and $D^{-}F \le D_{+}F$. Combined with the sidewise inequalities $D_{+}F \le D^{+}F$ and $D_{-}F \le D^{-}F$ from [[thm-dini-derivatives-exist-are-ordered-and-detect-differentiability]], this forces $D_{+}F = D^{+}F = D_{-}F = D^{-}F$ at almost every point where the four Dini derivatives are finite. [step 2.1]

4.1 Steps 1.1 and 3.1 show that all four Dini derivatives agree finitely almost everywhere on $(a,b)$. Therefore [[thm-dini-derivatives-exist-are-ordered-and-detect-differentiability]] implies that $F'$ exists almost everywhere. Since a null set in the Lebesgue sense is the same as elementary measure zero on the line ([[thm-lebesgue-null-agrees-with-elementary-measure-zero-on-the-line]]), this is exactly the claimed almost-everywhere statement. [step 1.1, step 3.1] ∎
