---
id: def-ramification-index-curve-map
kind: definition
title: "Ramification index of a morphism of curves"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-discrete-valuation-ring
  - def-nonconstant-morphism-curves-degree
  - def-order-codimension-one-rational-function
  - thm-dvr-element-normal-form
  - thm-local-ring-smooth-curve-dvr
  - def-axiom-of-choice
  - def-unramified-morphism-finite-type
  - lem-differentials-base-change
  - lem-etale-residue-extensions-finite-separable
  - lem-finite-type-field-zero-differentials-finite-separable
  - thm-nakayama-lemma
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "The Stacks Project, Algebraic Curves (tag 0BRV)"
      url: "https://stacks.math.columbia.edu/download/curves.pdf"
    - title: "Ravi Vakil, The Rising Sea (version of October 21, 2025), Chs. 19 and 21"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf"
    - title: "William Fulton, Algebraic Curves (Internet Archive copy), Chs. 6-8"
      url: "https://web.archive.org/web/20240102232744id_/https://dept.math.lsa.umich.edu/~wfulton/CurveBook.pdf"
---

## Definition

Assume the Axiom of Choice ([[def-axiom-of-choice]]), inherited through
the finite curve-map and smooth-curve DVR interfaces and the unramifiedness
comparison below.
Let $k$ be a field and let $f:C\to D$ be a nonconstant morphism of smooth
proper geometrically integral curves over $k$, of degree $\deg(f)$
([[def-nonconstant-morphism-curves-degree]]). Let $p\in C$ be a closed point
and put $q=f(p)$. The local rings $\mathcal O_{C,p}$ and $\mathcal O_{D,q}$
are discrete valuation rings ([[thm-local-ring-smooth-curve-dvr]]): they are
Noetherian local domains of dimension one whose maximal ideals are principal,
so they are discrete valuation rings in the sense of
[[def-discrete-valuation-ring]]. Let $t_q$ be a uniformizer of
$\mathcal O_{D,q}$, that is, a generator of its maximal ideal.

Because $f$ is a morphism of $k$-schemes with $f(p)=q$, the comorphism
$f^{\sharp}_p:\mathcal O_{D,q}\to\mathcal O_{C,p}$ is a local homomorphism of
local rings, so $f^{\sharp}_p(t_q)$ lies in the maximal ideal of
$\mathcal O_{C,p}$. The **ramification index of $f$ at $p$** is
$$e_p:=\operatorname{ord}_p\bigl(f^{\sharp}_p(t_q)\bigr)\in\mathbb Z_{>0},$$
the order of vanishing at $p$ of the pullback of the local parameter
([[def-order-codimension-one-rational-function]]), which is a positive
integer because $f^{\sharp}_p(t_q)$ is a nonzero element of the maximal ideal
and the order of a uniformizer of a discrete valuation ring is one
([[thm-dvr-element-normal-form]]).

The definition is independent of the chosen uniformizer. If $t_q'$ is another
uniformizer of $\mathcal O_{D,q}$, then $t_q'=u\,t_q$ for a unit
$u\in\mathcal O_{D,q}^{\times}$; a local homomorphism carries units to units,
so $f^{\sharp}_p(u)$ is a unit of $\mathcal O_{C,p}$, and
$\operatorname{ord}_p\bigl(f^{\sharp}_p(t_q')\bigr)=\operatorname{ord}_p\bigl(f^{\sharp}_p(u)\bigr)+\operatorname{ord}_p\bigl(f^{\sharp}_p(t_q)\bigr)=0+e_p=e_p$,
by additivity of the order
([[def-order-codimension-one-rational-function]]). Thus $e_p$ depends only on
$f$ and $p$. Equivalently, in the notation of the structure of a local
homomorphism of discrete valuation rings, $e_p$ is the unique positive integer
with
$$t_q\ \mapsto\ u\,t_p^{\,e_p},\qquad u\in\mathcal O_{C,p}^{\times},$$
where $t_p$ is a uniformizer of $\mathcal O_{C,p}$; this is the unique
factorization of $f^{\sharp}_p(t_q)$ supplied by
[[thm-dvr-element-normal-form]]. The point $p$ is **index-unramified** over $q$ when $e_p=1$ and
**index-ramified** when $e_p>1$. This terminology records the index only; it
does not by itself assert that $f$ is unramified as a morphism.

For the scheme-theoretic notion, the exact criterion in this finite curve-map
setting is
$$p\text{ is unramified for }f\quad\Longleftrightarrow\quad e_p=1\text{ and }\kappa(p)/\kappa(q)\text{ is separable}.$$
Here is the local route. Once the DVR structures are available, independence
of the uniformizer uses no additional Choice; the comparison also inherits
Choice through the cited residue and Nakayama lemmas. Write $A=\mathcal O_{D,q}$ and $B=\mathcal O_{C,p}$, with
$t_q\mapsto u t_p^{e_p}$. If $f$ is unramified, then
[[lem-etale-residue-extensions-finite-separable]] gives
$\mathfrak m_A B=\mathfrak m_B$ and a finite separable residue extension.
Since $\mathfrak m_A B=(t_p^{e_p})$, its equality with $(t_p)$ gives
$e_p=1$. Conversely, if $e_p=1$, then
$B/t_qB=\kappa(p)$. If $\kappa(p)/\kappa(q)$ is separable, the finite
separable field extension has zero Kähler differentials by
[[lem-finite-type-field-zero-differentials-finite-separable]]. Base change
of differentials ([[lem-differentials-base-change]]) gives
$\Omega_{B/A}\otimes_B\kappa(p)=0$. Since $f$ is locally of finite type,
$\Omega_{B/A}$ is a finite $B$-module; Nakayama's lemma gives
$\Omega_{B/A}=0$, and the locally-finite-type criterion for unramifiedness is
[[def-unramified-morphism-finite-type]]. Thus the residue-field condition is
essential whenever the index is used to describe ordinary unramifiedness.
