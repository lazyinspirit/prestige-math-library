---
id: def-good-tree-watson-symmetric-stone-model
kind: definition
title: "The Good-Tree-Watson symmetric Stone model"
status: draft
origin: pipeline
deps: [def-symmetric-forcing-system-and-hereditarily-symmetric-names, thm-hereditarily-symmetric-interpretations-form-a-zf-model, def-forcing-name-automorphism-action, def-forcing-preorder-compatibility-and-filter, def-complete-boolean-algebra-and-regular-open-sets, thm-forcing-preorders-have-regular-open-completions, def-product-topology, def-metric-space, def-axiom-of-choice]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "C. Good, I. J. Tree, and W. S. Watson, On Stone's theorem and the axiom of choice"
      url: "https://web.mat.bham.ac.uk/C.Good/research/pdfs/stone.pdf"
      locator: "Sections 2-4, printed pp. 2-9"
---

## Definition

Work in a transitive ZFC ground model $M$ with GCH ([[def-axiom-of-choice]]),
and fix a regular uncountable
cardinal $\lambda$. Put
$$P := \operatorname{Fn}(\lambda \times \mathbb{R} \times \lambda \times \lambda, 2, \lambda),$$
the set of partial functions with domain a subset of
$\lambda \times \mathbb{R} \times \lambda \times \lambda$ of size below
$\lambda$ and values in $2$, ordered by reverse inclusion: $q \le p$ means
$p \subseteq q$ ([[def-forcing-preorder-compatibility-and-filter]]).

Fix an $M$-generic filter $H\subseteq P$ in an ambient universe. Let
$B:=\operatorname{RO}(P)$ be the regular-open completion
([[def-complete-boolean-algebra-and-regular-open-sets]],
[[thm-forcing-preorders-have-regular-open-completions]]).

**The group.** Put $J=\lambda\times\mathbb R\times\lambda$. Use all
permutations $\pi$ of $J$ of the form
$$\pi(\xi,r,\alpha)=(\xi,\rho_\xi(r),\sigma_{\xi,r}(\alpha)), \qquad \rho_\xi(r)=\varepsilon_\xi r+t_\xi,$$
where $\varepsilon_\xi\in\{-1,1\}$, $t_\xi\in\mathbb R$, and each
$\sigma_{\xi,r}$ is a permutation of $\lambda$. All these data belong to $M$.
The real isometries are allowed independently for different $\xi$.
Composition replaces two real maps by
$r\mapsto\varepsilon'\varepsilon r+\varepsilon't+t'$ in each component;
inverses have the same form. The fibre permutations compose with the
corresponding reindexing of $r$, and their inverses are permutations too.
Thus these maps form a group, containing translations as well as reflections.

The induced action on conditions fixes the last coordinate:
$$(\pi p)(\pi(\xi,r,\alpha),\delta)=p(\xi,r,\alpha,\delta).$$
It preserves domain cardinalities and reverse inclusion and has the stated
inverse, hence acts by forcing automorphisms. It also acts on $B$ by taking
images of regular open sets: an order automorphism is a homeomorphism for
the downward-open topology and commutes with interior and closure. Write $G$
for this group of induced automorphisms. Its action on $P$-names is the
recursion of [[def-forcing-name-automorphism-action]].

**The filter and interpretation.** For $e\subseteq J$ of ground-model size
less than $\lambda$, put $\operatorname{fix}(e)=\{\pi\in G:\pi|_e=\mathrm{id}\}$.
Let $\mathcal F$ consist of the subgroups containing some such stabilizer.
It is upward closed, contains $G=\operatorname{fix}(\varnothing)$, and
$\operatorname{fix}(e\cup f)=\operatorname{fix}(e)\cap\operatorname{fix}(f)$.
Also $\pi\operatorname{fix}(e)\pi^{-1}=\operatorname{fix}(\pi[e])$ and
$|\pi[e]|=|e|$, proving normality. For fewer than $\lambda$ subgroups in
$\mathcal F$, ground-model AC chooses their support witnesses; regularity of
$\lambda$ makes their union have size less than $\lambda$, and its stabilizer
is contained in their intersection. Thus $\mathcal F$ is $<\lambda$-complete
in $M$.

Define $N=\mathrm{HS}_{\mathcal F}^{H}$ using the symmetric system
$(P,G,\mathcal F)$
([[def-symmetric-forcing-system-and-hereditarily-symmetric-names]]).
It is a transitive ZF model with $M\subseteq N\subseteq M[H]$
([[thm-hereditarily-symmetric-interpretations-form-a-zf-model]]).

**The canonical families.** For $\xi < \lambda$, $r \in \mathbb{R}$ and
$\alpha < \lambda$ let
$$x_{\xi r \alpha}:=\{\,\delta<\lambda: (\exists p\in H)\, p(\xi,r,\alpha,\delta)=1\,\}.$$
Thus $x_{\xi r\alpha}$ is a generic subset of $\lambda$, not in general a real.
Let
$X_{\xi r} := \{x_{\xi r \alpha} : \alpha < \lambda\}$, let
$R_\xi := \{X_{\xi r} : r \in \mathbb{R}\}$, and let
$\mathscr R := \{R_\xi : \xi < \lambda\}$, keeping $M$ for the ground model.
For two distinct triples and any condition, choose a last coordinate
$\delta<\lambda$ unused at both triples and extend the condition by opposite
values there. This is possible because fewer than $\lambda$ coordinates
have been used. These extensions are dense, so genericity makes all the
canonical subsets for distinct triples distinct. In particular the nonempty
families $X_{\xi r}$ for distinct $(\xi,r)$ are disjoint. Consequently the rule
$$d_\xi(X_{\xi r},X_{\xi s}) :=\frac{|r-s|}{1+|r-s|}$$
is a well-defined metric on $R_\xi$, transported from the displayed bounded
metric on $\mathbb R$; no metric is induced from the sets
$x_{\xi r\alpha}\subseteq\lambda$ themselves.

The name for $x_{\xi r\alpha}$ is fixed by
$\operatorname{fix}(\{(\xi,r,\alpha)\})$, the name for $X_{\xi r}$ is fixed by
$\operatorname{fix}(\{(\xi,r,\alpha_0)\})$ for any fixed
$\alpha_0<\lambda$, and the names for $R_\xi$ and $\mathscr R$ are fixed by the whole
group. Their members are hereditarily symmetric by induction, so all four kinds
of canonical object lie in $N$. The component family has the full index
set $\lambda$; this does not assert that the real-label enumeration of each
component is in $N$. The canonical name for $d_\xi$ is fixed by the whole
group since $|\rho_\xi(r)-\rho_\xi(s)|=|r-s|$; its subnames are hereditarily
symmetric by the same calculation, so $d_\xi\in N$. The metric triangle
inequality follows from the real triangle inequality and, for $a,b\ge0$,
$\frac{a+b}{1+a+b}\le\frac a{1+a}+\frac b{1+b}$; the function
$t\mapsto t/(1+t)$ is increasing for $t\ge0$. Separation and symmetry
follow directly from the distinct real labels. Thus the metric assertion
is justified internally as well as in the full extension.

The case $\lambda = \omega_1$ is the case used for the dependent-choice model
below; the same definition with larger $\lambda$ is the one whose
$<\lambda$-sequence closure is proved in the next item.

## Remarks

- **Why the presentation is indexed by $\lambda$ and not by $\omega$.** The
  paper's Theorems 1–3 use the countable index set and finite supports, and the
  paragraph after Theorem 3 states the regular-$\lambda$ replacement with
  supports of size below $\lambda$. The dependent-choice model needs the
  replacement with supports of size $<\lambda$. Closure under sequences is
  not inferred here from the finite-support presentation; it is a separate
  proof obligation for the regular-$\lambda$ construction.

- **What is not claimed here.** The definition does not assert dependent choice,
  the failure of Stone's theorem, or the existence of the metric sum of the
  components; those are separate items of this page.

- **Source convention repaired.** The source's Theorem 1 proof describes the
  real actions as identity or reflection, a class not closed under composition:
  two distinct reflections compose to a nonzero translation. Its Claim 1.3
  also uses a reflection on just one component. The componentwise affine
  isometry group above makes closure and this independence explicit, preserves
  the displayed metric, and retains all the canonical support calculations.
