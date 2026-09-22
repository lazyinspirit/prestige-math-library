---
id: def-adjoint-of-a-densely-defined-unbounded-operator
kind: definition
title: "Adjoint of a densely defined operator"
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-unbounded-linear-operator-domain-and-graph, def-densely-defined-closed-and-closable-operator, thm-riesz-representation-for-hilbert-space, def-countable-choice, def-dense-top, def-bounded-linear-operator, def-hilbert-space]
proof_strategy: not-applicable
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Dana P. Williams, Lecture Notes on the Spectral Theorem"
      url: "https://www.math.dartmouth.edu/~dana/bookspapers/ln-spec-thm.pdf"
      locator: "Definition 7.6, p.30"
    - title: "Theo Buehler and Dietmar A. Salamon, Functional Analysis"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
      locator: "Chapter 6, Definition 6.26 and Lemma 6.27, Sec. 6.3.1"
    - title: "Gerald Teschl, Mathematical Methods in Quantum Mechanics, second edition"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe2.pdf"
      locator: "Section 2.2, pp.66-69"
---

## Definition

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $T$ be a
densely defined linear operator on $H$, with domain $D(T)$ dense in $H$
([[def-densely-defined-closed-and-closable-operator]], [[def-dense-top]]).
Since $D(T)$ is dense, and since $H$ is complete ([[def-hilbert-space]]), every
bounded linear functional on the normed space $(D(T),\|\cdot\|)$
([[def-bounded-linear-operator]]) extends uniquely to a bounded linear
functional $\widetilde\varphi$ on $H$ of the same norm, by setting
$\widetilde\varphi(z)=\lim_n\varphi(z_n)$ for any sequence $z_n\in D(T)$ with
$z_n\to z$ in $H$; the limit exists because $\varphi$ is bounded on a dense
subspace and $H$ is complete, and it does not depend on the sequence because a
bounded functional is uniformly continuous.

A vector $y\in H$ belongs to the **adjoint domain** $D(T^*)$ when the linear
functional $\varphi_y:D(T)\to\mathbb C$, $\varphi_y(x)=\langle Tx,y\rangle$, is
bounded on $(D(T),\|\cdot\|)$. In that case Hilbert space Riesz representation
([[thm-riesz-representation-for-hilbert-space]]) applied to the extension
$\widetilde{\varphi_y}$ produces a unique vector $T^*y\in H$ with
$$T^*y\text{ is the unique }w\in H\text{ such that }\langle Tx,y\rangle=\langle x,w\rangle\quad\text{for all }x\in D(T),$$
equivalently $\widetilde{\varphi_y}(z)=\langle z,T^*y\rangle$ for all $z\in H$.
The map $T^*:D(T^*)\to H$, $y\mapsto T^*y$, is the **adjoint** of $T$.

**Well-definedness.** The functional $\varphi_y$ is linear in $x$ for each
$y$, so its domain of boundedness $D(T^*)$ is a linear subspace: if
$\varphi_y,\varphi_{y'}$ are bounded so is $\varphi_{ay+by'}$ for scalars
$a,b$, because the first-variable-linear convention gives
$\varphi_{ay+by'}=\overline a\,\varphi_y+\overline b\,\varphi_{y'}$. On
$D(T^*)$ the map $T^*$ is linear: if $y,y'$ are represented by $w,w'$, then
$ay+by'$ is represented by $aw+bw'$, since
$\langle x,aw+bw'\rangle=\overline a\langle x,w\rangle+
\overline b\langle x,w'\rangle$; the representing vector is unique. By Riesz representation for the Hilbert space
$H$ a vector $w\in H$ is determined by the values $\langle z,w\rangle$ with
$z$ ranging over $H$, and those values are determined by the functional
$\widetilde{\varphi_y}$. Equivalently, if $w,w'$ both represent $\varphi_y$,
then $\langle x,w-w'\rangle=0$ for every $x\in D(T)$; density of $D(T)$ and
continuity of the inner product extend this equality to every $x\in H$, and
taking $x=w-w'$ gives $w=w'$. Finally only
ambient-norm boundedness of $\varphi_y$ on $D(T)$ is required: no extension,
no closure and no closedness of $T$ is presupposed.
