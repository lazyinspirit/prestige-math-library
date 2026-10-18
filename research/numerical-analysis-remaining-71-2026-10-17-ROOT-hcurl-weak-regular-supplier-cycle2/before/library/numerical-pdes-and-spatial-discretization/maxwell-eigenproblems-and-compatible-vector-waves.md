---
page: maxwell-eigenproblems-and-compatible-vector-waves
title: Maxwell eigenproblems and compatible vector wave approximation
status: draft
items:
  - lem-pe11-compact-self-adjoint-spectral-approximation
  - lem-pe11-hcurl-weak-limit
  - def-na-pe11-maxwell-cavity-eigenproblem
  - lem-pe11-zero-eigenvalue-is-curl-kernel
  - lem-pe11-gauge-space-infinite-dimensional
  - lem-pe11-smooth-nedelec-approximation
  - lem-pe11-continuous-gauge-compact-embedding
  - lem-pe11-gauge-conforming-edge-approximation
  - thm-pe11-edge-maxwell-spectral-approximation
examples: []
---

The page formulates the PEC curl-curl eigenproblem on the zero-tangential
$H(\operatorname{curl})$ space. The gauge removes the entire curl kernel;
the companion shell example exhibits a topology-dependent zero mode. The
positive spectrum is treated separately. The spectral theorem uses positive
homogeneous scalar $\epsilon,\mu$ and a shape-regular refining family of
matching affine tetrahedra.

Continuous compactness is reduced to the regular decomposition: its regular
parts are compact by Rellich, and orthogonality to the full curl kernel
controls the gradient remainder. Smooth edge interpolation and finite-kernel
projection provide conforming gauge approximants. A local compact-positive
operator argument then proves cluster convergence with multiplicity and no
nonzero spectral pollution.

The proof uses the commuting cochain projection in this declared form:

```tikzcd
H_0(\operatorname{curl};\Omega) \arrow[r,"\operatorname{curl}"] \arrow[d,"\pi_h^1"'] & H(\operatorname{div};\Omega) \arrow[d,"\pi_h^2"] \\
N_h^1 \arrow[r,"\operatorname{curl}"] & N_h^2
```

The horizontal maps are the continuous and discrete curl operators. The
vertical maps are the current PE09 projection interface, which asserts
$\operatorname{curl}\pi_h^1=\pi_h^2\operatorname{curl}$ and preserves the
zero-tangential boundary subspace in degree one. The diagram records that
interface; the proof itself uses the stated operator identities and does not
rely on a diagram. The current regular-decomposition, commuting-projection
and discrete-compactness supplier proofs remain unresolved, so the
application theorem is escalated pending those exact suppliers.
